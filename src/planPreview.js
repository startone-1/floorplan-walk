/**
 * 間取りプレビュー描画（画像がなくてもデータから描ける）
 * GitHub Pages でも確実に表示
 */
import { normalizeBuilding } from "./floorplans/houseBuilding.js";
import { planBounds } from "./core.js";

/** public 配下のパスを base 付きに変換 */
export function assetUrl(path) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  const base = import.meta.env.BASE_URL || "/";
  const clean = String(path).replace(/^\//, "");
  return base.endsWith("/") ? base + clean : `${base}/${clean}`;
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {object} floorPlan - single level or multi-floor building
 * @param {number} [levelIndex=0]
 */
export function drawPlanPreview(canvas, floorPlan, levelIndex = 0) {
  if (!canvas || !floorPlan) return;
  const building = normalizeBuilding(floorPlan);
  const level =
    building.levels[levelIndex] ||
    building.levels[0] ||
    floorPlan;
  const rooms = level.rooms || [];
  const walls = level.walls || [];
  if (!rooms.length && !walls.length) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const cssW = canvas.clientWidth || 320;
  const cssH = canvas.clientHeight || 240;
  canvas.width = Math.floor(cssW * dpr);
  canvas.height = Math.floor(cssH * dpr);

  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssW, cssH);

  // 背景
  ctx.fillStyle = "#f8fafc";
  ctx.fillRect(0, 0, cssW, cssH);

  const b = planBounds(level);
  const pad = 16;
  const worldW = b.maxX - b.minX || 1;
  const worldH = b.maxZ - b.minZ || 1;
  const scale = Math.min((cssW - pad * 2) / worldW, (cssH - pad * 2) / worldH);
  const ox = (cssW - worldW * scale) / 2;
  const oy = (cssH - worldH * scale) / 2;
  const tx = (x) => ox + (x - b.minX) * scale;
  const tz = (z) => oy + (b.maxZ - z) * scale; // 上が北

  // 部屋
  for (const room of rooms) {
    if (!room.points?.length) continue;
    ctx.beginPath();
    room.points.forEach((p, i) => {
      if (i === 0) ctx.moveTo(tx(p.x), tz(p.z));
      else ctx.lineTo(tx(p.x), tz(p.z));
    });
    ctx.closePath();
    ctx.fillStyle = room.floor || room.color || "#e8e0d4";
    ctx.globalAlpha = 0.95;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = "rgba(30,40,50,0.12)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // 部屋名
    if (room.name && room.name !== "階段" && room.points.length >= 3) {
      const cx = room.points.reduce((s, p) => s + p.x, 0) / room.points.length;
      const cz = room.points.reduce((s, p) => s + p.z, 0) / room.points.length;
      ctx.fillStyle = "rgba(30,40,50,0.75)";
      ctx.font = `bold ${Math.max(9, Math.min(12, scale * 0.35))}px "Hiragino Sans", "Noto Sans JP", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(room.name, tx(cx), tz(cz));
    }
  }

  // 壁
  ctx.strokeStyle = "rgba(25, 30, 40, 0.85)";
  ctx.lineWidth = Math.max(2, scale * 0.08);
  ctx.lineCap = "square";
  for (const w of walls) {
    if ((w.h ?? 3) < 1.2) continue;
    ctx.beginPath();
    ctx.moveTo(tx(w.a.x), tz(w.a.z));
    ctx.lineTo(tx(w.b.x), tz(w.b.z));
    ctx.stroke();
  }

  // 階段ハイライト
  for (const s of level.stairs || []) {
    ctx.fillStyle = "rgba(251, 191, 36, 0.35)";
    const x = tx(s.minX);
    const y = tz(s.maxZ);
    const ww = (s.maxX - s.minX) * scale;
    const hh = (s.maxZ - s.minZ) * scale;
    ctx.fillRect(x, y, ww, hh);
  }

  // 枠
  ctx.strokeStyle = "rgba(15, 23, 42, 0.12)";
  ctx.lineWidth = 1;
  ctx.strokeRect(0.5, 0.5, cssW - 1, cssH - 1);
}

/**
 * 複数階がある場合のタブ付きプレビュー
 */
export function setupPlanPreview(container, floorPlan) {
  if (!container) return;
  const building = normalizeBuilding(floorPlan);
  const levels = building.levels || [];

  container.innerHTML = `
    <div class="plan-preview-head">
      <h4>間取り図</h4>
      <div class="plan-level-tabs" id="plan-level-tabs"></div>
    </div>
    <canvas id="detail-plan-canvas" class="detail-plan-canvas" width="640" height="400"></canvas>
    <p class="plan-preview-note">※ 3Dデータから生成した図です。実寸は内覧で体感してください。</p>
  `;

  const tabs = container.querySelector("#plan-level-tabs");
  const canvas = container.querySelector("#detail-plan-canvas");
  let active = 0;

  if (levels.length > 1) {
    tabs.innerHTML = levels
      .map(
        (lv, i) =>
          `<button type="button" class="plan-tab ${i === 0 ? "active" : ""}" data-i="${i}">${lv.name || `${i + 1}F`}</button>`
      )
      .join("");
    tabs.querySelectorAll(".plan-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        active = Number(btn.dataset.i);
        tabs.querySelectorAll(".plan-tab").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        drawPlanPreview(canvas, floorPlan, active);
      });
    });
  }

  // 表示後にサイズ確定して描画
  requestAnimationFrame(() => {
    drawPlanPreview(canvas, floorPlan, active);
  });
  // 回転・リサイズ
  const ro = new ResizeObserver(() => drawPlanPreview(canvas, floorPlan, active));
  ro.observe(container);
}
