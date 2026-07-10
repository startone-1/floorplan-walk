/**
 * 壁線分から部屋を自動分割
 * - 端点スナップ
 * - グリッドラスタライズ + フラッドフィル
 * - 輪郭抽出 → 矩形近似
 */

const EPS = 1e-6;

function dist(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

/** 近い端点を同一座標にスナップ */
export function snapWallEndpoints(walls, tol = 8) {
  const pts = [];
  for (const w of walls) {
    pts.push(w.a, w.b);
  }
  const clusters = [];
  for (const p of pts) {
    let found = null;
    for (const c of clusters) {
      if (dist(p, c) <= tol) {
        found = c;
        break;
      }
    }
    if (found) {
      found.x = (found.x * found.n + p.x) / (found.n + 1);
      found.y = (found.y * found.n + p.y) / (found.n + 1);
      found.n++;
      p._c = found;
    } else {
      const c = { x: p.x, y: p.y, n: 1 };
      p._c = c;
      clusters.push(c);
    }
  }
  return walls.map((w) => ({
    a: { x: w.a._c.x, y: w.a._c.y },
    b: { x: w.b._c.x, y: w.b._c.y },
    door: !!w.door,
  }));
}

/** 軸平行にスナップ（ほぼ水平・垂直の線） */
export function snapAxisAligned(walls, angleTolDeg = 12) {
  const tol = (angleTolDeg * Math.PI) / 180;
  return walls.map((w) => {
    const dx = w.b.x - w.a.x;
    const dy = w.b.y - w.a.y;
    const ang = Math.atan2(Math.abs(dy), Math.abs(dx));
    if (ang < tol) {
      // horizontal
      const y = (w.a.y + w.b.y) / 2;
      return { ...w, a: { x: w.a.x, y }, b: { x: w.b.x, y } };
    }
    if (Math.PI / 2 - ang < tol) {
      const x = (w.a.x + w.b.x) / 2;
      return { ...w, a: { x, y: w.a.y }, b: { x, y: w.b.y } };
    }
    return w;
  });
}

function bresenham(x0, y0, x1, y1, plot) {
  x0 = Math.round(x0);
  y0 = Math.round(y0);
  x1 = Math.round(x1);
  y1 = Math.round(y1);
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;
  for (;;) {
    plot(x0, y0);
    if (x0 === x1 && y0 === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }
}

/**
 * 壁線から部屋ポリゴンを推定
 * @param {Array} wallsPx 画像座標の壁 {a:{x,y}, b:{x,y}, door?}
 * @param {{ cellSize?: number, minAreaCells?: number }} opts
 * @returns {{ rooms: Array, walls: Array, bounds: object }}
 */
export function segmentRooms(wallsPx, opts = {}) {
  const cellSize = opts.cellSize || 6; // px
  const minArea = opts.minAreaCells || 80;

  let walls = snapAxisAligned(wallsPx);
  walls = snapWallEndpoints(walls, cellSize * 1.2);

  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (const w of walls) {
    for (const p of [w.a, w.b]) {
      minX = Math.min(minX, p.x);
      maxX = Math.max(maxX, p.x);
      minY = Math.min(minY, p.y);
      maxY = Math.max(maxY, p.y);
    }
  }
  const pad = cellSize * 3;
  minX -= pad;
  maxX += pad;
  minY -= pad;
  maxY += pad;

  const W = Math.ceil((maxX - minX) / cellSize) + 1;
  const H = Math.ceil((maxY - minY) / cellSize) + 1;
  if (W * H > 2_000_000) {
    // 大きすぎる場合は cell を粗く
    return segmentRooms(wallsPx, { ...opts, cellSize: cellSize * 2 });
  }

  // 0=open 1=wall 2=door gap(walkable but edge)
  const grid = new Uint8Array(W * H);
  const idx = (x, y) => y * W + x;
  const toCell = (x, y) => ({
    cx: Math.round((x - minX) / cellSize),
    cy: Math.round((y - minY) / cellSize),
  });

  for (const w of walls) {
    const a = toCell(w.a.x, w.a.y);
    const b = toCell(w.b.x, w.b.y);
    const mark = w.door ? 2 : 1;
    bresenham(a.cx, a.cy, b.cx, b.cy, (x, y) => {
      if (x >= 0 && y >= 0 && x < W && y < H) {
        // door は薄い壁扱い（通過可）→ open のまま、ただし壁として線は残す
        if (mark === 1) {
          grid[idx(x, y)] = 1;
          // 太らせる
          for (const [dx, dy] of [
            [0, 0],
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ]) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < W && ny < H) grid[idx(nx, ny)] = 1;
          }
        }
      }
    });
  }

  // 外周を壁に（外と中を分ける）
  for (let x = 0; x < W; x++) {
    grid[idx(x, 0)] = 1;
    grid[idx(x, H - 1)] = 1;
  }
  for (let y = 0; y < H; y++) {
    grid[idx(0, y)] = 1;
    grid[idx(W - 1, y)] = 1;
  }

  // フラッドフィル
  const labels = new Int32Array(W * H);
  let label = 0;
  const regions = [];

  for (let y = 1; y < H - 1; y++) {
    for (let x = 1; x < W - 1; x++) {
      if (grid[idx(x, y)] === 1 || labels[idx(x, y)] !== 0) continue;
      label++;
      const q = [[x, y]];
      labels[idx(x, y)] = label;
      let minCX = x,
        maxCX = x,
        minCY = y,
        maxCY = y,
        count = 0;
      const cells = [];
      while (q.length) {
        const [cx, cy] = q.pop();
        count++;
        cells.push([cx, cy]);
        minCX = Math.min(minCX, cx);
        maxCX = Math.max(maxCX, cx);
        minCY = Math.min(minCY, cy);
        maxCY = Math.max(maxCY, cy);
        for (const [dx, dy] of [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ]) {
          const nx = cx + dx;
          const ny = cy + dy;
          if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
          if (grid[idx(nx, ny)] === 1) continue;
          if (labels[idx(nx, ny)] !== 0) continue;
          labels[idx(nx, ny)] = label;
          q.push([nx, ny]);
        }
      }
      // 画像外周に触れる領域は「屋外」として捨てる
      const touchesBorder =
        minCX <= 1 || minCY <= 1 || maxCX >= W - 2 || maxCY >= H - 2;
      if (count >= minArea && !touchesBorder) {
        regions.push({
          label,
          count,
          minCX,
          maxCX,
          minCY,
          maxCY,
          cells,
        });
      }
    }
  }

  // 面積順
  regions.sort((a, b) => b.count - a.count);

  const palette = [
    "#efe6d8",
    "#e8dfd2",
    "#dce8f0",
    "#d0e8dc",
    "#e8e0d4",
    "#f0ebe3",
    "#d8e8c8",
    "#c8d0d8",
    "#ddd5c8",
    "#f5efe4",
  ];

  const rooms = regions.map((r, i) => {
    // 輪郭を矩形近似（実務: まずAABB、将来は marching squares）
    const x0 = minX + r.minCX * cellSize;
    const y0 = minY + r.minCY * cellSize;
    const x1 = minX + (r.maxCX + 1) * cellSize;
    const y1 = minY + (r.maxCY + 1) * cellSize;
    const areaPx = r.count * cellSize * cellSize;
    const name = suggestRoomName(i, r, regions);
    return {
      name,
      color: palette[i % palette.length],
      floor: palette[i % palette.length],
      // 画像座標（y下向き）の矩形
      pointsPx: [
        { x: x0, y: y0 },
        { x: x1, y: y0 },
        { x: x1, y: y1 },
        { x: x0, y: y1 },
      ],
      areaPx,
      _bbox: { x0, y0, x1, y1 },
    };
  });

  return {
    rooms,
    walls,
    bounds: { minX, maxX, minY, maxY },
    cellSize,
    gridMeta: { W, H },
  };
}

function suggestRoomName(i, region, all) {
  if (i === 0) return "LDK";
  const w = region.maxCX - region.minCX;
  const h = region.maxCY - region.minCY;
  const aspect = w / (h || 1);
  const area = region.count;
  if (area < all[0].count * 0.12) {
    if (aspect > 1.4 || aspect < 0.7) return "廊下";
    return `収納${i}`;
  }
  if (area < all[0].count * 0.25) return `水回り${i}`;
  return `洋室${i}`;
}

/**
 * 画像座標の部屋・壁をメートル座標の floorPlan に変換
 * @param seg segmentRooms 結果
 * @param {{ scaleMPerPx: number, maxY: number, name?: string, doors?: Array }} opts
 */
export function segmentToFloorPlan(seg, opts) {
  const m = opts.scaleMPerPx;
  const maxY = opts.maxY;
  const toW = (x, y) => ({ x: x * m, z: (maxY - y) * m });

  const walls = seg.walls
    .filter((w) => !w.door)
    .map((w) => ({
      a: toW(w.a.x, w.a.y),
      b: toW(w.b.x, w.b.y),
    }));

  const doors = (opts.doors || seg.walls.filter((w) => w.door)).map((w) => ({
    a: toW(w.a.x, w.a.y),
    b: toW(w.b.x, w.b.y),
    label: "ドア",
    exterior: false,
  }));

  const rooms = seg.rooms.map((r) => ({
    name: r.name,
    color: r.color,
    floor: r.floor,
    points: r.pointsPx.map((p) => toW(p.x, p.y)),
  }));

  // bounds for entrance
  let minX = Infinity,
    maxX = -Infinity,
    minZ = Infinity,
    maxZ = -Infinity;
  for (const r of rooms) {
    for (const p of r.points) {
      minX = Math.min(minX, p.x);
      maxX = Math.max(maxX, p.x);
      minZ = Math.min(minZ, p.z);
      maxZ = Math.max(maxZ, p.z);
    }
  }
  if (!isFinite(minX)) {
    minX = 0;
    maxX = 5;
    minZ = 0;
    maxZ = 5;
  }

  const cx = (minX + maxX) / 2;
  const doorW = 0.9;
  // 南辺に玄関開口を追加
  walls.push(
    { a: { x: minX, z: minZ }, b: { x: cx - doorW / 2, z: minZ } },
    { a: { x: cx + doorW / 2, z: minZ }, b: { x: maxX, z: minZ } }
  );
  doors.unshift({
    a: { x: cx - doorW / 2, z: minZ },
    b: { x: cx + doorW / 2, z: minZ },
    label: "玄関",
    exterior: true,
  });

  // 外周が欠けている場合に備えて外壁を補強
  const hasOuter = walls.length >= 3;
  if (hasOuter) {
    // 既にトレース済み想定
  }

  rooms.push({
    name: "ポーチ",
    color: "#c0b8a8",
    floor: "#b0a898",
    points: [
      { x: cx - 1.3, z: minZ - 1.6 },
      { x: cx + 1.3, z: minZ - 1.6 },
      { x: cx + 1.3, z: minZ },
      { x: cx - 1.3, z: minZ },
    ],
  });

  // 簡易家具を最大部屋に
  const main = rooms[0];
  let furniture = [];
  if (main) {
    const mx =
      main.points.reduce((s, p) => s + p.x, 0) / main.points.length;
    const mz =
      main.points.reduce((s, p) => s + p.z, 0) / main.points.length;
    furniture = [
      { type: "sofa", x: mx - 0.8, z: mz, rot: 0, w: 1.8, d: 0.8, h: 0.75 },
      { type: "table", x: mx + 0.9, z: mz, rot: 0, w: 0.9, d: 0.9, h: 0.4 },
    ];
  }

  return {
    id: `traced-${Date.now()}`,
    title: opts.name || "トレース物件",
    wallHeight: 2.45,
    entrance: { x: cx, z: minZ, facing: Math.PI },
    spawn: { x: cx, z: minZ - 2.2, yaw: 0 },
    rooms,
    walls,
    doors,
    windows: [],
    furniture,
    exterior: {
      style: "house",
      floors: 1,
      unitFloor: 1,
      facadeColor: "#f0ebe3",
      accentColor: "#5c4033",
      roofColor: "#4a5568",
    },
  };
}
