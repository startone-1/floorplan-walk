/** 共通定数・衝突・部屋判定・階段（めり込み防止） */

export const WALL_H = 2.45;
export const DOOR_H = 2.1;
export const PLAYER_R = 0.22;
export const EYE_H = 1.6;
export const FLOOR_H_DEFAULT = 2.85;

export function distPointSeg(px, pz, ax, az, bx, bz) {
  const dx = bx - ax;
  const dz = bz - az;
  const len2 = dx * dx + dz * dz;
  if (len2 < 1e-10) return Math.hypot(px - ax, pz - az);
  let t = ((px - ax) * dx + (pz - az) * dz) / len2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + t * dx), pz - (az + t * dz));
}

/**
 * @param walls Array<{a,b,h?, baseY?}>
 * @param playerY プレイヤー足元Y
 */
export function resolveCollision(x, z, radius, walls, playerY = 0) {
  let px = x;
  let pz = z;
  for (let iter = 0; iter < 3; iter++) {
    for (const w of walls) {
      const h = w.h ?? WALL_H;
      if (h < 1.05) continue;
      const baseY = w.baseY ?? 0;
      // 足元〜頭の高さに交差する壁だけ
      if (playerY + 1.85 < baseY || playerY > baseY + h + 0.15) continue;
      const d = distPointSeg(px, pz, w.a.x, w.a.z, w.b.x, w.b.z);
      if (d < radius) {
        const dx = w.b.x - w.a.x;
        const dz = w.b.z - w.a.z;
        const len = Math.hypot(dx, dz) || 1;
        let t = ((px - w.a.x) * dx + (pz - w.a.z) * dz) / (len * len);
        t = Math.max(0, Math.min(1, t));
        const cx = w.a.x + t * dx;
        const cz = w.a.z + t * dz;
        let nx = px - cx;
        let nz = pz - cz;
        const nd = Math.hypot(nx, nz);
        if (nd < 1e-8) {
          nx = -dz / len;
          nz = dx / len;
        } else {
          nx /= nd;
          nz /= nd;
        }
        const push = radius - d + 0.002;
        px += nx * push;
        pz += nz * push;
      }
    }
  }
  return { x: px, z: pz };
}

export function pointInPolygon(x, z, points) {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const xi = points[i].x;
    const zi = points[i].z;
    const xj = points[j].x;
    const zj = points[j].z;
    const intersect =
      zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi + 1e-12) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

export function roomAt(x, z, rooms) {
  for (const r of rooms) {
    if (pointInPolygon(x, z, r.points)) return r.name;
  }
  return "屋外";
}

export function planBounds(planOrLevel) {
  const rooms = planOrLevel.rooms || [];
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
  return { minX, maxX, minZ, maxZ, cx: (minX + maxX) / 2, cz: (minZ + maxZ) / 2 };
}

export function buildingBounds(building) {
  let minX = Infinity,
    maxX = -Infinity,
    minZ = Infinity,
    maxZ = -Infinity;
  for (const lv of building.levels || []) {
    const b = planBounds(lv);
    minX = Math.min(minX, b.minX);
    maxX = Math.max(maxX, b.maxX);
    minZ = Math.min(minZ, b.minZ);
    maxZ = Math.max(maxZ, b.maxZ);
  }
  if (!isFinite(minX)) {
    return { minX: 0, maxX: 5, minZ: 0, maxZ: 5, cx: 2.5, cz: 2.5 };
  }
  return { minX, maxX, minZ, maxZ, cx: (minX + maxX) / 2, cz: (minZ + maxZ) / 2 };
}

export function getLevel(building, level) {
  return (building.levels || []).find((l) => l.level === level) || building.levels?.[0];
}

/** 建物内の階段定義を重複なく列挙 */
export function collectStairs(building) {
  const map = new Map();
  for (const lv of building.levels || []) {
    for (const s of lv.stairs || []) {
      const id = s.id || `${s.minX},${s.minZ}`;
      if (!map.has(id)) map.set(id, s);
    }
  }
  return [...map.values()];
}

/**
 * 階段ヒット（XZ）
 * t=0 下階側, t=1 上階側
 */
export function findStairHit(x, z, building) {
  const H = building.floorHeight || FLOOR_H_DEFAULT;
  for (const s of collectStairs(building)) {
    // 少し内側だけを歩行領域に（壁際の誤判定を減らす）
    const pad = 0.06;
    if (
      x < s.minX + pad ||
      x > s.maxX - pad ||
      z < s.minZ + pad ||
      z > s.maxZ - pad
    ) {
      continue;
    }
    const lowZ = s.lowZ ?? s.minZ;
    const highZ = s.highZ ?? s.maxZ;
    const span = highZ - lowZ || 0.01;
    let t = (z - lowZ) / span;
    t = Math.max(0, Math.min(1, t));
    const lowLevel = Math.min(s.fromLevel, s.toLevel);
    const highLevel = Math.max(s.fromLevel, s.toLevel);
    const footY = lowLevel * H + t * H * (highLevel - lowLevel || 1);
    return {
      stair: s,
      t,
      footY,
      lowLevel,
      highLevel,
      level: t >= 0.5 ? highLevel : lowLevel,
    };
  }
  return null;
}

/**
 * 高さ解決（2階から落ちる・めり込むのを防ぐ）
 *
 * ルール:
 * - 階段に乗っていないときは「現在階の床」に固定
 * - 階段への進入は下端（1F）/ 上端（2F）からのみ
 * - 階段上は t に追従、端部で離床して階確定
 *
 * @param {{ x, z, footY, level, onStairs }} st
 */
export function resolveElevation(st, building) {
  const H = building.floorHeight || FLOOR_H_DEFAULT;
  const maxLv = Math.max(0, ...(building.levels || []).map((l) => l.level || 0));
  let level = Math.max(0, Math.min(maxLv, st.level | 0));
  let footY = st.footY;
  let onStairs = !!st.onStairs;
  const hit = findStairHit(st.x, st.z, building);

  if (onStairs) {
    if (hit) {
      footY = hit.footY;
      // 端部で離床
      if (hit.t <= 0.04) {
        onStairs = false;
        level = hit.lowLevel;
        footY = level * H;
      } else if (hit.t >= 0.96) {
        onStairs = false;
        level = hit.highLevel;
        footY = level * H;
      } else {
        // 中腹: 近い階ヒント（表示用）だが足元はスロープ
        level = hit.level;
      }
      return { footY, level, onStairs };
    }
    // 横に外れた → 近い床に吸着（落下させない）
    onStairs = false;
    level = footY >= H * 0.5 ? Math.min(maxLv, Math.round(footY / H)) : 0;
    footY = level * H;
    return { footY, level, onStairs };
  }

  // —— 床上 —— 階段には端部からのみ乗る
  if (hit) {
    if (level === hit.lowLevel && hit.t <= 0.22) {
      return { footY: hit.footY, level: hit.lowLevel, onStairs: true };
    }
    if (level === hit.highLevel && hit.t >= 0.78) {
      return { footY: hit.footY, level: hit.highLevel, onStairs: true };
    }
    // 2F で階段穴の上にいるが進入条件外 → 床を維持（穴に落ちない）
    // 1F で階段領域にいるが上端付近 → 床維持
  }

  // 堅牢: 現在階の床に固定（屋外は level0 のみ 0）
  footY = level * H;
  if (level === 0) {
    const lv0 = getLevel(building, 0);
    const name = roomAt(st.x, st.z, lv0?.rooms || []);
    if (name === "屋外") footY = 0;
  }
  return { footY, level, onStairs: false };
}
