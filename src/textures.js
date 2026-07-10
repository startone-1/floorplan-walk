import * as THREE from "three";

/** 高品質寄りプロシージャルテクスチャ（外部アセット不要） */

function canvas(size = 512) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  return c;
}

function toTex(c, repeat = 2) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.anisotropy = 8;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}

function noise(ctx, size, alpha = 0.06) {
  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 255 * alpha * 2;
    d[i] = Math.max(0, Math.min(255, d[i] + n));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n));
    d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n));
  }
  ctx.putImageData(img, 0, 0);
}

export function woodFloorTex() {
  const size = 512;
  const c = canvas(size);
  const ctx = c.getContext("2d");
  // ベース
  ctx.fillStyle = "#c4a06a";
  ctx.fillRect(0, 0, size, size);
  const plankH = 48;
  for (let y = 0; y < size; y += plankH) {
    const base = 165 + Math.random() * 35;
    const g = base - 45 + Math.random() * 10;
    const b = base - 90 + Math.random() * 12;
    // 板グラデ
    const grad = ctx.createLinearGradient(0, y, 0, y + plankH);
    grad.addColorStop(0, `rgb(${base + 8},${g + 5},${b})`);
    grad.addColorStop(0.5, `rgb(${base},${g},${b})`);
    grad.addColorStop(1, `rgb(${base - 12},${g - 8},${b - 4})`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, y + 1, size, plankH - 2);
    // 継ぎ目
    ctx.strokeStyle = "rgba(60,35,12,0.35)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, y + plankH);
    ctx.lineTo(size, y + plankH);
    ctx.stroke();
    // 縦継ぎ
    let x = Math.random() * 80;
    while (x < size) {
      ctx.strokeStyle = "rgba(50,30,10,0.2)";
      ctx.beginPath();
      ctx.moveTo(x, y + 1);
      ctx.lineTo(x, y + plankH - 1);
      ctx.stroke();
      x += 90 + Math.random() * 120;
    }
    // 木目
    for (let i = 0; i < 6; i++) {
      const px = Math.random() * size;
      ctx.strokeStyle = `rgba(90,55,20,${0.06 + Math.random() * 0.08})`;
      ctx.lineWidth = 1 + Math.random();
      ctx.beginPath();
      ctx.moveTo(px, y + 4);
      ctx.bezierCurveTo(px + 30, y + 16, px - 20, y + 28, px + 40, y + plankH - 4);
      ctx.stroke();
    }
  }
  noise(ctx, size, 0.04);
  return toTex(c, 3.5);
}

export function woodRoughTex() {
  const size = 256;
  const c = canvas(size);
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#888";
  ctx.fillRect(0, 0, size, size);
  for (let y = 0; y < size; y += 32) {
    ctx.fillStyle = `rgb(${100 + Math.random() * 40},${100 + Math.random() * 40},${100 + Math.random() * 40})`;
    ctx.fillRect(0, y, size, 30);
  }
  return toTex(c, 3.5);
}

export function tileFloorTex(base = "#d0d8e0") {
  const size = 512;
  const c = canvas(size);
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#a8b0b8";
  ctx.fillRect(0, 0, size, size);
  const s = 64;
  for (let y = 0; y < size; y += s) {
    for (let x = 0; x < size; x += s) {
      const v = 6 - Math.random() * 14;
      ctx.fillStyle = shade(base, v);
      ctx.fillRect(x + 2, y + 2, s - 4, s - 4);
      // ハイライト
      ctx.fillStyle = "rgba(255,255,255,0.12)";
      ctx.fillRect(x + 4, y + 4, s * 0.4, 3);
      ctx.strokeStyle = "rgba(40,45,50,0.25)";
      ctx.strokeRect(x + 1.5, y + 1.5, s - 3, s - 3);
    }
  }
  noise(ctx, size, 0.03);
  return toTex(c, 4);
}

export function tatamiTex() {
  const size = 512;
  const c = canvas(size);
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#c8d890";
  ctx.fillRect(0, 0, size, size);
  for (let y = 0; y < size; y += 3) {
    ctx.strokeStyle = y % 6 === 0 ? "rgba(80,90,35,0.22)" : "rgba(100,110,50,0.1)";
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(size, y);
    ctx.stroke();
  }
  ctx.fillStyle = "#3a2818";
  ctx.fillRect(0, 0, 14, size);
  ctx.fillRect(size - 14, 0, 14, size);
  noise(ctx, size, 0.04);
  return toTex(c, 1.8);
}

export function plasterWallTex() {
  const size = 512;
  const c = canvas(size);
  const ctx = c.getContext("2d");
  const g = ctx.createLinearGradient(0, 0, size, size);
  g.addColorStop(0, "#f6f3ed");
  g.addColorStop(1, "#ebe6dc");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 4000; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const a = 0.015 + Math.random() * 0.03;
    ctx.fillStyle = Math.random() > 0.5 ? `rgba(0,0,0,${a})` : `rgba(255,255,255,${a})`;
    ctx.fillRect(x, y, 1.5 + Math.random() * 2, 1.5 + Math.random() * 2);
  }
  return toTex(c, 2.2);
}

export function grassTex() {
  const size = 256;
  const c = canvas(size);
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#3d6b32";
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 1200; i++) {
    const r = 40 + Math.random() * 50;
    const g = 90 + Math.random() * 70;
    const b = 30 + Math.random() * 40;
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    const x = Math.random() * size;
    const y = Math.random() * size;
    ctx.fillRect(x, y, 1 + Math.random() * 2, 2 + Math.random() * 4);
  }
  return toTex(c, 14);
}

export function concreteTex() {
  const size = 256;
  const c = canvas(size);
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#9a9a96";
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 600; i++) {
    const g = 130 + Math.random() * 50;
    ctx.fillStyle = `rgb(${g},${g},${g - 4})`;
    ctx.fillRect(Math.random() * size, Math.random() * size, 2 + Math.random() * 4, 2 + Math.random() * 4);
  }
  noise(ctx, size, 0.05);
  return toTex(c, 3);
}

export function woodDeckTex() {
  const size = 512;
  const c = canvas(size);
  const ctx = c.getContext("2d");
  for (let y = 0; y < size; y += 36) {
    const r = 110 + Math.random() * 40;
    ctx.fillStyle = `rgb(${r},${r - 45},${r - 75})`;
    ctx.fillRect(0, y, size, 34);
    ctx.strokeStyle = "rgba(40,25,10,0.4)";
    ctx.strokeRect(0.5, y + 0.5, size - 1, 33);
    for (let i = 0; i < 3; i++) {
      const x = Math.random() * size;
      ctx.strokeStyle = "rgba(60,35,15,0.15)";
      ctx.beginPath();
      ctx.moveTo(x, y + 2);
      ctx.lineTo(x + 40, y + 32);
      ctx.stroke();
    }
  }
  return toTex(c, 2.5);
}

function shade(hex, d) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) + d;
  let g = ((n >> 8) & 255) + d;
  let b = (n & 255) + d;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return `rgb(${r},${g},${b})`;
}

/** 簡易環境マップ（室内反射用） */
export function makeEnvMap(renderer) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xddeeff, 0x887766, 1));
  const sun = new THREE.DirectionalLight(0xfff2dd, 1.2);
  sun.position.set(5, 10, 3);
  scene.add(sun);
  // 空の色帯
  const skyGeo = new THREE.SphereGeometry(20, 16, 12);
  const skyMat = new THREE.MeshBasicMaterial({
    color: 0x87aecc,
    side: THREE.BackSide,
  });
  scene.add(new THREE.Mesh(skyGeo, skyMat));
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(30, 24),
    new THREE.MeshBasicMaterial({ color: 0x5a7a45 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1;
  scene.add(ground);
  const rt = pmrem.fromScene(scene, 0.04);
  pmrem.dispose();
  scene.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) o.material.dispose();
  });
  return rt.texture;
}

let cache = null;
export function getTextures() {
  if (cache) return cache;
  cache = {
    wood: woodFloorTex(),
    woodRough: woodRoughTex(),
    tile: tileFloorTex(),
    tatami: tatamiTex(),
    plaster: plasterWallTex(),
    grass: grassTex(),
    concrete: concreteTex(),
    deck: woodDeckTex(),
  };
  return cache;
}
