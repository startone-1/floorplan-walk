import * as THREE from "three";
import { WALL_H, DOOR_H, planBounds, buildingBounds, FLOOR_H_DEFAULT } from "./core.js";
import { getTextures } from "./textures.js";
import { normalizeBuilding } from "./floorplans/houseBuilding.js";

const WALL_THICK = 0.12;

function makeMat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    map: opts.map || null,
    roughnessMap: opts.roughnessMap || null,
    normalMap: opts.normalMap || null,
    roughness: opts.roughness ?? 0.75,
    metalness: opts.metalness ?? 0.04,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? THREE.FrontSide,
    envMapIntensity: opts.envMapIntensity ?? 0.65,
  });
}

function wallMesh(ax, az, bx, bz, height, y0, mat) {
  const dx = bx - ax;
  const dz = bz - az;
  const len = Math.hypot(dx, dz);
  if (len < 0.01) return null;
  const geo = new THREE.BoxGeometry(len, height, WALL_THICK);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set((ax + bx) / 2, y0 + height / 2, (az + bz) / 2);
  mesh.rotation.y = -Math.atan2(dz, dx);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function roomFloor(room, texs) {
  if (room.noFloor || room.name === "階段") return null;

  let minX = Infinity,
    maxX = -Infinity,
    minZ = Infinity,
    maxZ = -Infinity;
  for (const p of room.points) {
    minX = Math.min(minX, p.x);
    maxX = Math.max(maxX, p.x);
    minZ = Math.min(minZ, p.z);
    maxZ = Math.max(maxZ, p.z);
  }
  const w = Math.max(0.05, maxX - minX);
  const d = Math.max(0.05, maxZ - minZ);

  let map = null;
  let color = room.floor || room.color || "#e8e0d4";
  let roughness = 0.72;
  let metalness = 0.04;
  const n = room.name;
  if (n.includes("和室")) {
    map = texs.tatami;
    color = "#c5d48a";
    roughness = 0.92;
  } else if (
    n.includes("バス") ||
    n.includes("洗面") ||
    n.includes("トイレ") ||
    n.includes("玄関") ||
    n.includes("ポーチ")
  ) {
    map = texs.tile;
    color = n.includes("玄関") || n.includes("ポーチ") ? "#c4b8a8" : "#d8e4ee";
    roughness = 0.35;
    metalness = 0.08;
  } else if (n.includes("デッキ") || n.includes("バルコニー")) {
    map = n.includes("デッキ") ? texs.deck : texs.concrete;
    color = n.includes("デッキ") ? "#9a7340" : "#b0b8c0";
    roughness = 0.8;
  } else {
    map = texs.wood;
    color = "#c9a87c";
    roughness = 0.55;
  }

  const mat = makeMat(color, {
    map,
    roughness,
    metalness,
    envMapIntensity: 0.55,
    side: THREE.DoubleSide,
  });
  // わずかに反射感
  if (map && texs.woodRough && map === texs.wood) {
    mat.roughnessMap = texs.woodRough;
  }
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, d), mat);
  mesh.position.set((minX + maxX) / 2, 0.025, (minZ + maxZ) / 2);
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  return mesh;
}

function furnitureMesh(f) {
  const group = new THREE.Group();
  group.position.set(f.x, 0, f.z);
  group.rotation.y = f.rot || 0;

  const add = (w, h, d, y, color, opts = {}) => {
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      makeMat(color, opts)
    );
    m.position.y = y;
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
    return m;
  };

  switch (f.type) {
    case "bed": {
      add(f.w, f.h, f.d, f.h / 2, "#6a7f98", { roughness: 0.65 });
      add(f.w * 0.96, 0.12, f.d * 0.92, f.h + 0.07, "#eef2f6", { roughness: 0.85 });
      add(f.w * 0.9, 0.08, f.d * 0.45, f.h + 0.12, "#d8e0e8", { roughness: 0.9 }).position.z =
        f.d * 0.12;
      add(f.w * 0.95, 0.45, 0.12, f.h / 2 + 0.2, "#4a5f78", { roughness: 0.55 }).position.z =
        -f.d / 2 + 0.06;
      add(f.w * 0.36, 0.14, 0.3, f.h + 0.18, "#f5f5f5", { roughness: 0.9 }).position.set(
        -f.w * 0.2,
        0,
        -f.d * 0.32
      );
      add(f.w * 0.36, 0.14, 0.3, f.h + 0.18, "#f5f5f5", { roughness: 0.9 }).position.set(
        f.w * 0.2,
        0,
        -f.d * 0.32
      );
      break;
    }
    case "sofa": {
      add(f.w, 0.4, f.d, 0.24, "#6f8f62", { roughness: 0.8 });
      const back = add(f.w, 0.52, 0.18, 0.6, "#5f7f52", { roughness: 0.75 });
      back.position.z = -f.d / 2 + 0.09;
      const armL = add(0.18, 0.4, f.d * 0.92, 0.55, "#5f7f52", { roughness: 0.75 });
      armL.position.x = -f.w / 2 + 0.09;
      const armR = add(0.18, 0.4, f.d * 0.92, 0.55, "#5f7f52", { roughness: 0.75 });
      armR.position.x = f.w / 2 - 0.09;
      add(f.w * 0.42, 0.14, f.d * 0.55, 0.5, "#92b080", { roughness: 0.85 }).position.x =
        -f.w * 0.18;
      add(f.w * 0.42, 0.14, f.d * 0.55, 0.5, "#92b080", { roughness: 0.85 }).position.x =
        f.w * 0.18;
      break;
    }
    case "table": {
      add(f.w, 0.05, f.d, f.h, "#c9a66b");
      const leg = 0.055;
      for (const [lx, lz] of [
        [-f.w / 2 + 0.08, -f.d / 2 + 0.08],
        [f.w / 2 - 0.08, -f.d / 2 + 0.08],
        [-f.w / 2 + 0.08, f.d / 2 - 0.08],
        [f.w / 2 - 0.08, f.d / 2 - 0.08],
      ]) {
        const m = add(leg, f.h - 0.02, leg, (f.h - 0.02) / 2, "#a8844a");
        m.position.x = lx;
        m.position.z = lz;
      }
      break;
    }
    case "desk": {
      add(f.w, 0.05, f.d, f.h, "#8b7355");
      add(f.w, f.h - 0.05, 0.05, (f.h - 0.05) / 2, "#7a6348").position.z = f.d / 2 - 0.03;
      break;
    }
    case "chair": {
      add(f.w, 0.06, f.d, 0.45, "#a08050");
      add(f.w * 0.9, 0.4, 0.06, 0.7, "#906f40").position.z = -f.d / 2 + 0.03;
      for (const [lx, lz] of [
        [-f.w / 2 + 0.05, -f.d / 2 + 0.05],
        [f.w / 2 - 0.05, -f.d / 2 + 0.05],
        [-f.w / 2 + 0.05, f.d / 2 - 0.05],
        [f.w / 2 - 0.05, f.d / 2 - 0.05],
      ]) {
        const m = add(0.04, 0.42, 0.04, 0.21, "#806040");
        m.position.set(lx, 0, lz);
      }
      break;
    }
    case "kitchen": {
      add(f.w, f.h, f.d, f.h / 2, "#f4f4f2");
      add(f.w + 0.04, 0.04, f.d + 0.04, f.h + 0.02, "#2c3338", { metalness: 0.45, roughness: 0.35 });
      const stove = add(f.w * 0.75, 0.03, 0.42, f.h + 0.05, "#1a1a1a");
      stove.position.z = f.d * 0.12;
      // 取っ手
      for (let i = 0; i < 3; i++) {
        const h = add(0.03, 0.12, 0.02, f.h * 0.45, "#888", { metalness: 0.6 });
        h.position.set(f.w / 2 - 0.01, 0, -f.d / 2 + 0.3 + i * 0.55);
      }
      break;
    }
    case "island": {
      add(f.w, f.h, f.d, f.h / 2, "#f0ebe3");
      add(f.w + 0.05, 0.04, f.d + 0.05, f.h + 0.02, "#3a3f44", { metalness: 0.3, roughness: 0.4 });
      break;
    }
    case "fridge": {
      add(f.w, f.h, f.d, f.h / 2, "#eef1f4", { metalness: 0.35, roughness: 0.35 });
      add(0.02, f.h * 0.28, 0.06, f.h * 0.6, "#999", { metalness: 0.5 }).position.x = f.w / 2;
      add(f.w * 0.9, 0.01, f.d * 0.95, f.h * 0.55, "#ccc");
      break;
    }
    case "tv": {
      add(f.w, 0.35, f.d + 0.25, 0.22, "#3d3428");
      add(f.w * 0.95, f.h * 0.72, 0.04, 0.55 + f.h * 0.25, "#111");
      add(f.w * 0.88, f.h * 0.62, 0.02, 0.55 + f.h * 0.25, "#1a3355", { metalness: 0.2, roughness: 0.3 });
      break;
    }
    case "closet": {
      add(f.w, f.h, f.d, f.h / 2, "#d8cbb5");
      add(0.01, f.h * 0.92, f.d * 0.95, f.h / 2, "#c4b49a");
      add(0.02, 0.08, 0.02, f.h * 0.5, "#888").position.x = f.w / 2;
      break;
    }
    case "toilet": {
      add(f.w, f.h, f.d, f.h / 2, "#f7f7f7");
      add(f.w * 0.75, 0.32, 0.22, f.h + 0.14, "#eee").position.z = -f.d * 0.22;
      break;
    }
    case "sink": {
      add(f.w, f.h * 0.72, f.d, (f.h * 0.72) / 2, "#f2f2f0");
      add(f.w * 0.92, 0.06, f.d * 0.72, f.h * 0.72 + 0.03, "#c5d8e8");
      add(f.w * 0.88, 0.75, 0.03, f.h + 0.55, "#a8c8e0", {
        metalness: 0.55,
        roughness: 0.15,
      }).position.z = -f.d * 0.28;
      break;
    }
    case "bath": {
      add(f.w, f.h, f.d, f.h / 2, "#e4f0f6");
      add(f.w * 0.88, 0.04, f.d * 0.78, f.h - 0.02, "#b5d4e8");
      break;
    }
    case "plant": {
      add(f.w * 0.55, 0.25, f.d * 0.55, 0.12, "#a07050");
      const pot = new THREE.Mesh(
        new THREE.ConeGeometry(f.w * 0.45, f.h * 0.7, 8),
        makeMat("#2d6a3e")
      );
      pot.position.y = 0.25 + f.h * 0.35;
      pot.castShadow = true;
      group.add(pot);
      break;
    }
    case "tatami": {
      // 床の上に畳表現（薄い）
      add(f.w, 0.04, f.d, 0.03, "#c8d890");
      break;
    }
    default:
      add(f.w || 0.5, f.h || 0.5, f.d || 0.5, (f.h || 0.5) / 2, "#888");
  }
  return group;
}

function makeTextSprite(text, x, y, z) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 256, 64);
  ctx.fillStyle = "rgba(15, 20, 25, 0.55)";
  ctx.beginPath();
  const r = 12;
  ctx.moveTo(8 + r, 8);
  ctx.arcTo(248, 8, 248, 56, r);
  ctx.arcTo(248, 56, 8, 56, r);
  ctx.arcTo(8, 56, 8, 8, r);
  ctx.arcTo(8, 8, 248, 8, r);
  ctx.closePath();
  ctx.fill();
  ctx.font = "bold 26px 'Hiragino Sans', 'Noto Sans JP', sans-serif";
  ctx.fillStyle = "#f1f5f9";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 128, 32);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({
    map: tex,
    transparent: true,
    depthWrite: false,
    opacity: 0.88,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.position.set(x, y, z);
  sprite.scale.set(1.5, 0.38, 1);
  sprite.userData.isLabel = true;
  return sprite;
}

/** 外観・アプローチ・建物外皮 */
function buildExterior(group, plan, texs, colliders) {
  const ext = plan.exterior || { style: "apartment", facadeColor: "#e8e4dc" };
  const b = planBounds(plan);
  const ent = plan.entrance || { x: (b.minX + b.maxX) / 2, z: b.minZ };

  // 芝生（建物足元より十分下に）
  {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(60, 60),
      makeMat("#5a8a45", { map: texs.grass, roughness: 1 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(b.cx, -0.12, b.cz);
    ground.receiveShadow = true;
    group.add(ground);
  }

  // 建物下の基礎スラブ（屋内床の下地・隙間から芝生が見えないように）
  {
    const slab = new THREE.Mesh(
      new THREE.BoxGeometry(b.maxX - b.minX + 0.6, 0.12, b.maxZ - b.minZ + 0.6),
      makeMat("#8a8680", { roughness: 1 })
    );
    slab.position.set(b.cx, -0.05, b.cz);
    slab.receiveShadow = true;
    group.add(slab);
  }

  // アプローチ（コンクリート通路）
  {
    const pathW = 1.6;
    const pathLen = Math.abs(plan.spawn.z - ent.z) + 0.5;
    const path = new THREE.Mesh(
      new THREE.BoxGeometry(pathW, 0.04, pathLen),
      makeMat("#a0a098", { map: texs.concrete, roughness: 0.95 })
    );
    path.position.set(ent.x, 0.0, (plan.spawn.z + ent.z) / 2);
    path.receiveShadow = true;
    group.add(path);

    // 門柱っぽい柱
    for (const sx of [-0.95, 0.95]) {
      const post = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 1.1, 0.2),
        makeMat("#6a6a68")
      );
      post.position.set(ent.x + sx, 0.55, plan.spawn.z + 0.3);
      post.castShadow = true;
      group.add(post);
    }
  }

  // ポーチ床
  {
    const porch = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 0.08, 1.6),
      makeMat("#b8b0a0", { map: texs.tile, roughness: 0.9 })
    );
    porch.position.set(ent.x, 0.02, ent.z - 0.7);
    porch.receiveShadow = true;
    group.add(porch);
  }

  // 玄関ドア（半開き）
  {
    const door = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, DOOR_H - 0.05, 0.7),
      makeMat(ext.accentColor || "#4a6a8a", { roughness: 0.55 })
    );
    door.position.set(ent.x + 0.45, (DOOR_H - 0.05) / 2, ent.z + 0.08);
    door.rotation.y = 0.65;
    door.castShadow = true;
    group.add(door);

    // ドア枠
    const frameMat = makeMat("#3d3428");
    for (const [ox, oy, oz, w, h, d] of [
      [-0.48, DOOR_H / 2, 0, 0.08, DOOR_H, 0.14],
      [0.48, DOOR_H / 2, 0, 0.08, DOOR_H, 0.14],
      [0, DOOR_H + 0.04, 0, 1.05, 0.1, 0.14],
    ]) {
      const fr = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), frameMat);
      fr.position.set(ent.x + ox, oy, ent.z + oz);
      group.add(fr);
    }
  }

  // 建物外観（上階は中空の外壁のみ — 俯瞰で間取りが隠されない）
  if (ext.style === "apartment") {
    const floors = ext.floors || 5;
    const unitFloor = ext.unitFloor || 3;
    const bodyH = floors * 2.8;
    const facadeMat = makeMat(ext.facadeColor || "#e0dcd4", { roughness: 0.88 });
    const shell = new THREE.Group();
    shell.userData.hideInBird = true;

    // 上階の四面外壁（中空）
    const w = b.maxX - b.minX + 0.35;
    const d = b.maxZ - b.minZ + 0.35;
    const upperH = (floors - unitFloor) * 2.8 + 0.2;
    const upperY0 = WALL_H + 0.05;
    const wallT = 0.2;
    const sides = [
      { x: b.cx, z: b.minZ - 0.12, sx: w, sz: wallT },
      { x: b.cx, z: b.maxZ + 0.12, sx: w, sz: wallT },
      { x: b.minX - 0.12, z: b.cz, sx: wallT, sz: d },
      { x: b.maxX + 0.12, z: b.cz, sx: wallT, sz: d },
    ];
    for (const s of sides) {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(s.sx, upperH, s.sz),
        facadeMat
      );
      m.position.set(s.x, upperY0 + upperH / 2, s.z);
      m.castShadow = true;
      shell.add(m);
    }
    // 屋上スラブ
    const roofSlab = new THREE.Mesh(
      new THREE.BoxGeometry(w + 0.15, 0.15, d + 0.15),
      makeMat("#c8c4bc", { roughness: 0.95 })
    );
    roofSlab.position.set(b.cx, upperY0 + upperH + 0.05, b.cz);
    shell.add(roofSlab);

    // 窓の並び（外観）
    const winMat = makeMat("#7eb8e0", {
      transparent: true,
      opacity: 0.55,
      metalness: 0.2,
      roughness: 0.2,
    });
    for (let fl = unitFloor + 1; fl <= floors; fl++) {
      const y = (fl - unitFloor - 1) * 2.8 + upperY0 + 1.3;
      for (let i = 0; i < 3; i++) {
        const wx = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.0, 0.06), winMat);
        wx.position.set(b.minX + 1.2 + i * 1.5, y, b.minZ - 0.16);
        shell.add(wx);
        const wx2 = wx.clone();
        wx2.position.set(b.minX + 1.2 + i * 1.5, y, b.maxZ + 0.16);
        shell.add(wx2);
      }
    }

    group.add(shell);
    const badge = makeTextSprite(`${unitFloor}F 内覧中`, b.cx, bodyH * 0.55, b.minZ - 1.2);
    badge.userData.hideInBird = true;
    group.add(badge);
  } else if ((ext.floors || 1) <= 1) {
    // 平屋の屋根（2階建は buildFromPlan 側で最上階に載せる）
    const roofH = 1.6;
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(
        Math.max(b.maxX - b.minX, b.maxZ - b.minZ) * 0.7,
        roofH,
        4
      ),
      makeMat(ext.roofColor || "#4a5568", { roughness: 0.85 })
    );
    roof.position.set(b.cx, WALL_H + roofH / 2 + 0.15, b.cz);
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    roof.userData.hideInBird = true;
    group.add(roof);
  }

  // 外灯
  {
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.06, 2.4, 8),
      makeMat("#444")
    );
    pole.position.set(ent.x + 1.4, 1.2, ent.z - 1.5);
    group.add(pole);
    const lamp = new THREE.PointLight(0xffe8c8, 4, 8, 2);
    lamp.position.set(ent.x + 1.4, 2.3, ent.z - 1.5);
    group.add(lamp);
    const bulb = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 12, 12),
      makeMat("#fff4d0", { roughness: 0.3, metalness: 0.1 })
    );
    bulb.position.copy(lamp.position);
    group.add(bulb);
  }

  // 植え込み
  for (const [px, pz] of [
    [ent.x - 2.2, ent.z - 1.8],
    [ent.x + 2.2, ent.z - 1.8],
    [b.minX - 1.2, b.cz],
    [b.maxX + 1.2, b.cz],
  ]) {
    const bush = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 10, 10),
      makeMat("#3d7a3a", { roughness: 1 })
    );
    bush.position.set(px, 0.4, pz);
    bush.scale.y = 0.75;
    bush.castShadow = true;
    group.add(bush);
  }
}

function buildStairsMesh(stair, floorH, baseY) {
  const g = new THREE.Group();
  const steps = 14;
  const w = stair.maxX - stair.minX;
  const depth = (stair.highZ ?? stair.maxZ) - (stair.lowZ ?? stair.minZ);
  const stepD = depth / steps;
  const stepH = floorH / steps;
  const wood = makeMat("#8a6a45", { roughness: 0.55, metalness: 0.06, envMapIntensity: 0.5 });
  const riser = makeMat("#7a5e3a", { roughness: 0.7 });
  for (let i = 0; i < steps; i++) {
    const z = (stair.lowZ ?? stair.minZ) + (i + 0.5) * stepD;
    const y = baseY + (i + 0.5) * stepH;
    const tread = new THREE.Mesh(
      new THREE.BoxGeometry(w * 0.94, Math.max(0.04, stepH * 0.35), stepD * 0.95),
      wood
    );
    tread.position.set((stair.minX + stair.maxX) / 2, y + stepH * 0.2, z);
    tread.castShadow = true;
    tread.receiveShadow = true;
    g.add(tread);
    const r = new THREE.Mesh(
      new THREE.BoxGeometry(w * 0.94, stepH * 0.85, 0.03),
      riser
    );
    r.position.set((stair.minX + stair.maxX) / 2, y - stepH * 0.15, z - stepD * 0.4);
    r.castShadow = true;
    g.add(r);
  }
  // 手すり（見た目）
  const railMat = makeMat("#4a5560", { metalness: 0.55, roughness: 0.35 });
  for (const x of [stair.minX + 0.04, stair.maxX - 0.04]) {
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const z = (stair.lowZ ?? stair.minZ) + t * depth;
      const y = baseY + t * floorH + 0.9;
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.95, 8), railMat);
      post.position.set(x, y - 0.35, z);
      post.castShadow = true;
      g.add(post);
    }
    // 手すりレール
    const rail = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, 0.05, depth),
      railMat
    );
    rail.position.set(x, baseY + floorH * 0.55 + 0.45, (stair.minZ + stair.maxZ) / 2);
    rail.rotation.x = Math.atan2(floorH, depth);
    g.add(rail);
  }
  g.add(
    makeTextSprite("階段", (stair.minX + stair.maxX) / 2, baseY + floorH * 0.5, (stair.minZ + stair.maxZ) / 2)
  );
  return g;
}

function buildLevel(level, y0, mats, texs, colliders) {
  const g = new THREE.Group();
  g.position.y = y0;
  const wallH = level.wallHeight || WALL_H;

  for (const room of level.rooms || []) {
    const f = roomFloor(room, texs);
    if (f) g.add(f);
  }

  const addWallCollider = (w, h) => {
    colliders.push({
      a: { ...w.a },
      b: { ...w.b },
      h,
      baseY: y0,
    });
  };

  for (const w of level.walls || []) {
    const h = w.h ?? wallH;
    const mesh = wallMesh(w.a.x, w.a.z, w.b.x, w.b.z, h, 0, h < 1.5 ? mats.rail : mats.wall);
    if (mesh) g.add(mesh);
    addWallCollider(w, h);

    // 巾木
    if (h > 1.5) {
      const base = wallMesh(w.a.x, w.a.z, w.b.x, w.b.z, 0.08, 0, mats.baseboard);
      if (base) {
        base.scale.z = 1.4;
        g.add(base);
      }
    }
  }

  // 2F 手すりなど
  for (const w of level.railWalls || []) {
    const h = w.h ?? 1.05;
    const mesh = wallMesh(w.a.x, w.a.z, w.b.x, w.b.z, h, 0, mats.rail);
    if (mesh) g.add(mesh);
    addWallCollider(w, h);
  }

  for (const d of level.doors || []) {
    const dx = d.b.x - d.a.x;
    const dz = d.b.z - d.a.z;
    const len = Math.hypot(dx, dz);
    const mx = (d.a.x + d.b.x) / 2;
    const mz = (d.a.z + d.b.z) / 2;
    const rot = -Math.atan2(dz, dx);

    const lintel = new THREE.Mesh(
      new THREE.BoxGeometry(len + 0.1, 0.12, WALL_THICK + 0.04),
      mats.doorFrame
    );
    lintel.position.set(mx, DOOR_H + 0.06, mz);
    lintel.rotation.y = rot;
    lintel.castShadow = true;
    g.add(lintel);

    const above = wallMesh(d.a.x, d.a.z, d.b.x, d.b.z, wallH - DOOR_H - 0.12, DOOR_H + 0.12, mats.wall);
    if (above) g.add(above);

    if (!d.exterior && d.label !== "バルコニー" && d.label !== "デッキ" && d.label !== "階段") {
      const door = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, DOOR_H - 0.05, Math.max(0.2, len * 0.55)),
        makeMat("#d2c0a0", { roughness: 0.72 })
      );
      const nx = -dz / (len || 1);
      const nz = dx / (len || 1);
      door.position.set(
        d.a.x + dx * 0.15 + nx * 0.06,
        (DOOR_H - 0.05) / 2,
        d.a.z + dz * 0.15 + nz * 0.06
      );
      door.rotation.y = rot + 0.55;
      door.castShadow = true;
      g.add(door);
    }
  }

  for (const win of level.windows || []) {
    const h = win.h ?? 1.2;
    const sill = win.sill ?? 0.9;
    const mesh = wallMesh(win.a.x, win.a.z, win.b.x, win.b.z, h, sill, mats.glass);
    if (mesh) {
      mesh.castShadow = false;
      g.add(mesh);
    }
  }

  // 天井（最上階以外は床下地にもなる）
  {
    const b = planBounds(level);
    const ceil = new THREE.Mesh(
      new THREE.BoxGeometry(b.maxX - b.minX + 0.4, 0.06, b.maxZ - b.minZ + 0.4),
      mats.ceiling
    );
    ceil.position.set(b.cx, wallH, b.cz);
    ceil.receiveShadow = true;
    ceil.userData.isCeiling = true;
    g.add(ceil);
  }

  for (const f of level.furniture || []) {
    g.add(furnitureMesh(f));
  }

  for (const room of level.rooms || []) {
    if (["収納", "SIC", "廊下", "板の間", "パントリー", "WIC", "階段"].includes(room.name)) continue;
    const cx = room.points.reduce((s, p) => s + p.x, 0) / room.points.length;
    const cz = room.points.reduce((s, p) => s + p.z, 0) / room.points.length;
    const big = room.name.includes("LD") || room.name === "リビング・ダイニング" || room.name === "LDK";
    // 暖色の天井照明
    const pl = new THREE.PointLight(0xfff0dd, big ? 14 : 7, big ? 9 : 6, 1.8);
    pl.position.set(cx, wallH - 0.25, cz);
    g.add(pl);
    // 補助フィル
    const fill = new THREE.PointLight(0xe8f0ff, big ? 3 : 1.5, 5, 2);
    fill.position.set(cx + 0.8, 1.4, cz - 0.5);
    g.add(fill);
    // 天井灯
    const fixture = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.28, 0.06, 20),
      makeMat("#fff8f0", { roughness: 0.35, metalness: 0.15, envMapIntensity: 0.8 })
    );
    fixture.position.set(cx, wallH - 0.04, cz);
    fixture.userData.isCeiling = true;
    g.add(fixture);
    const glow = new THREE.Mesh(
      new THREE.CircleGeometry(0.35, 24),
      new THREE.MeshBasicMaterial({ color: 0xfff4e0, transparent: true, opacity: 0.35 })
    );
    glow.rotation.x = -Math.PI / 2;
    glow.position.set(cx, wallH - 0.08, cz);
    glow.userData.isCeiling = true;
    g.add(glow);

    g.add(makeTextSprite(room.name, cx, 2.05, cz));
  }

  // 階段メッシュは 1F 側のみ描画（二重防止）
  return g;
}

/**
 * 単一 or 複数階の plan から 3D を構築
 * @returns {{ group, colliders, bounds, building }}
 */
export function buildFromPlan(plan) {
  const building = normalizeBuilding(plan);
  const group = new THREE.Group();
  const colliders = [];
  const texs = getTextures();
  const floorH = building.floorHeight || FLOOR_H_DEFAULT;

  const mats = {
    wall: makeMat("#f3efe8", {
      map: texs.plaster,
      roughness: 0.88,
      envMapIntensity: 0.35,
      side: THREE.DoubleSide,
    }),
    rail: makeMat("#5a6570", { metalness: 0.45, roughness: 0.4 }),
    doorFrame: makeMat("#6b5344", { roughness: 0.55, metalness: 0.08 }),
    glass: makeMat("#b8d4ec", {
      roughness: 0.08,
      metalness: 0.25,
      transparent: true,
      opacity: 0.28,
      side: THREE.DoubleSide,
      envMapIntensity: 1.2,
    }),
    ceiling: makeMat("#f7f5f2", { roughness: 0.95 }),
    baseboard: makeMat("#e8e2d8", { roughness: 0.7 }),
  };

  // 外観は 1F 基準
  const groundPlan = {
    ...building.levels[0],
    spawn: building.spawn,
    entrance: building.entrance,
    exterior: {
      ...building.exterior,
      floors: building.exterior?.floors || building.levels.length,
    },
  };
  buildExterior(group, groundPlan, texs, colliders);

  // 各階
  const builtStairs = new Set();
  for (const level of building.levels) {
    const y0 = (level.level || 0) * floorH;
    const lg = buildLevel(level, y0, mats, texs, colliders);
    group.add(lg);

    for (const st of level.stairs || []) {
      if (builtStairs.has(st.id)) continue;
      // 下階側で描画
      const low = Math.min(st.fromLevel, st.toLevel);
      if ((level.level || 0) === low) {
        group.add(buildStairsMesh(st, floorH, y0));
        builtStairs.add(st.id || `${st.minX}-${st.minZ}`);
      }
    }

    // 階ラベル
    const b = planBounds(level);
    group.add(
      makeTextSprite(level.name || `${(level.level || 0) + 1}F`, b.minX - 0.8, y0 + 1.5, b.cz)
    );
  }

  // 戸建て2階の場合、屋根を最上階の上に
  if (building.exterior?.style === "house" && building.levels.length > 1) {
    const top = building.levels[building.levels.length - 1];
    const b = planBounds(top);
    const y0 = (top.level || 0) * floorH + (top.wallHeight || WALL_H);
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(Math.max(b.maxX - b.minX, b.maxZ - b.minZ) * 0.7, 1.6, 4),
      makeMat(building.exterior.roofColor || "#4a5568", { roughness: 0.85 })
    );
    roof.position.set(b.cx, y0 + 0.9, b.cz);
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    roof.userData.hideInBird = true;
    group.add(roof);
  }

  const bounds = buildingBounds(building);
  return { group, colliders, bounds, building };
}
