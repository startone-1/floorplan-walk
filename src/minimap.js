/**
 * ミニマップ（現在階）
 */
export function drawMinimap(canvas, levelPlan, player, floorLabel = "") {
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const rooms = levelPlan?.rooms || [];
  if (!rooms.length) {
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(0, 0, W, H);
    return;
  }

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
  minZ = Math.min(minZ, player.z - 1);
  maxZ = Math.max(maxZ, player.z + 1);
  minX = Math.min(minX, player.x - 1);
  maxX = Math.max(maxX, player.x + 1);

  const pad = 0.5;
  minX -= pad;
  maxX += pad;
  minZ -= pad;
  maxZ += pad;

  const worldW = maxX - minX;
  const worldH = maxZ - minZ;
  const scale = Math.min((W - 14) / worldW, (H - 14) / worldH);
  const ox = (W - worldW * scale) / 2;
  const oy = (H - worldH * scale) / 2;
  const tx = (x) => ox + (x - minX) * scale;
  const tz = (z) => oy + (maxZ - z) * scale;

  ctx.fillStyle = "#1e293b";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "rgba(74, 122, 58, 0.3)";
  ctx.fillRect(0, 0, W, H);

  for (const room of rooms) {
    ctx.beginPath();
    room.points.forEach((p, i) => {
      if (i === 0) ctx.moveTo(tx(p.x), tz(p.z));
      else ctx.lineTo(tx(p.x), tz(p.z));
    });
    ctx.closePath();
    ctx.fillStyle = room.floor || room.color || "#334155";
    ctx.globalAlpha = 0.9;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(20,20,20,0.65)";
  ctx.lineWidth = 1.8;
  for (const w of levelPlan.walls || []) {
    ctx.beginPath();
    ctx.moveTo(tx(w.a.x), tz(w.a.z));
    ctx.lineTo(tx(w.b.x), tz(w.b.z));
    ctx.stroke();
  }

  // 階段
  for (const s of levelPlan.stairs || []) {
    ctx.fillStyle = "rgba(251, 191, 36, 0.35)";
    ctx.fillRect(
      tx(s.minX),
      tz(s.maxZ),
      (s.maxX - s.minX) * scale,
      (s.maxZ - s.minZ) * scale
    );
  }

  const px = tx(player.x);
  const pz = tz(player.z);
  ctx.fillStyle = "#3b82f6";
  ctx.beginPath();
  ctx.arc(px, pz, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  const len = 11;
  const fx = px + Math.sin(player.yaw) * len;
  const fz = pz - Math.cos(player.yaw) * len;
  ctx.strokeStyle = "#60a5fa";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(px, pz);
  ctx.lineTo(fx, fz);
  ctx.stroke();

  if (floorLabel) {
    ctx.fillStyle = "rgba(15,20,25,0.75)";
    ctx.fillRect(4, 4, 36, 16);
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 11px sans-serif";
    ctx.fillText(floorLabel, 10, 15);
  }
}
