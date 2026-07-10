/**
 * 間取りトレース（実務向け）
 * - 壁描画 / ドア描画
 * - 軸スナップ・端点スナップ
 * - スケール校正（2点＋実寸）
 * - 部屋自動分割
 * - プレビュー → 3D化
 */
import {
  segmentRooms,
  segmentToFloorPlan,
  snapAxisAligned,
  snapWallEndpoints,
} from "./segment.js";

let state = {
  image: null,
  imageUrl: null,
  walls: [], // {a,b,door?}
  drawing: false,
  start: null,
  mode: "wall", // wall | door | calibrate
  scaleMPerPx: 0.02,
  calibratePts: [],
  name: "アップロード物件",
  segPreview: null,
};

export function getTracerState() {
  return state;
}

export function initTracer(root) {
  root.innerHTML = `
    <div class="tracer">
      <div class="tracer-toolbar">
        <label class="btn secondary file-btn">
          画像を選ぶ
          <input type="file" id="tracer-file" accept="image/*" hidden />
        </label>
        <div class="tracer-modes">
          <button type="button" class="btn secondary mode-btn active" data-mode="wall">壁</button>
          <button type="button" class="btn secondary mode-btn" data-mode="door">ドア開口</button>
          <button type="button" class="btn secondary mode-btn" data-mode="calibrate">スケール校正</button>
        </div>
        <button type="button" class="btn secondary" id="tracer-undo" disabled>戻す</button>
        <button type="button" class="btn secondary" id="tracer-clear" disabled>クリア</button>
        <label class="scale-label">
          <span id="scale-display">50</span> px = 1m
        </label>
        <button type="button" class="btn secondary" id="tracer-segment" disabled>部屋を自動分割</button>
        <button type="button" class="btn primary" id="tracer-build" disabled>3D化して内覧</button>
      </div>
      <div class="tracer-stage">
        <canvas id="tracer-canvas"></canvas>
        <p class="tracer-empty" id="tracer-empty">間取り図の画像をアップロードしてください</p>
      </div>
      <div class="tracer-meta">
        <input type="text" id="tracer-name" class="tracer-name-input" placeholder="物件名（例: ○○マンション 201）" />
        <p class="tracer-note" id="tracer-status">
          壁モード: ドラッグで壁線。軸にスナップされます。スケール校正で既知寸法の2点を指定し、実長(m)を入力してください。
        </p>
        <div id="tracer-rooms-list" class="tracer-rooms-list"></div>
      </div>
    </div>
  `;

  const fileInput = root.querySelector("#tracer-file");
  const canvas = root.querySelector("#tracer-canvas");
  const empty = root.querySelector("#tracer-empty");
  const undoBtn = root.querySelector("#tracer-undo");
  const clearBtn = root.querySelector("#tracer-clear");
  const buildBtn = root.querySelector("#tracer-build");
  const segBtn = root.querySelector("#tracer-segment");
  const status = root.querySelector("#tracer-status");
  const roomsList = root.querySelector("#tracer-rooms-list");
  const nameInput = root.querySelector("#tracer-name");
  const scaleDisplay = root.querySelector("#scale-display");
  const ctx = canvas.getContext("2d");
  let viewScale = 1;

  function setMode(mode) {
    state.mode = mode;
    state.calibratePts = [];
    root.querySelectorAll(".mode-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.mode === mode);
    });
    if (mode === "calibrate") {
      status.textContent = "スケール校正: 図面上の既知寸法の一端をクリック → もう一端をクリック → 実長(m)を入力";
    } else if (mode === "door") {
      status.textContent = "ドア開口モード: 壁の開口部をドラッグで指定（通過可能）";
    } else {
      status.textContent = "壁モード: ドラッグで壁線。ほぼ水平・垂直は自動スナップ。端点も吸着します。";
    }
  }

  root.querySelectorAll(".mode-btn").forEach((b) => {
    b.addEventListener("click", () => setMode(b.dataset.mode));
  });

  function snapPoint(p) {
    // 既存端点へ吸着
    const SNAP = 12 / viewScale;
    let best = null;
    let bestD = SNAP;
    for (const w of state.walls) {
      for (const q of [w.a, w.b]) {
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < bestD) {
          bestD = d;
          best = q;
        }
      }
    }
    if (best) return { x: best.x, y: best.y };
    return p;
  }

  function axisSnap(a, b) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const ang = Math.atan2(Math.abs(dy), Math.abs(dx));
    const tol = (12 * Math.PI) / 180;
    if (ang < tol) return { x: b.x, y: a.y };
    if (Math.PI / 2 - ang < tol) return { x: a.x, y: b.y };
    return b;
  }

  function redraw(previewEnd = null) {
    if (!state.image) return;
    const maxW = Math.min(960, root.clientWidth - 32 || 800);
    viewScale = maxW / state.image.width;
    canvas.width = state.image.width * viewScale;
    canvas.height = state.image.height * viewScale;
    canvas.style.display = "block";
    empty.style.display = "none";
    ctx.setTransform(viewScale, 0, 0, viewScale, 0, 0);
    ctx.drawImage(state.image, 0, 0);

    // 部屋プレビュー
    if (state.segPreview?.rooms) {
      for (const r of state.segPreview.rooms) {
        ctx.fillStyle = r.color + "99";
        const pts = r.pointsPx;
        ctx.beginPath();
        pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "#0f172a";
        ctx.font = `${14 / viewScale}px sans-serif`;
        const cx = pts.reduce((s, p) => s + p.x, 0) / pts.length;
        const cy = pts.reduce((s, p) => s + p.y, 0) / pts.length;
        ctx.fillText(r.name, cx - 20 / viewScale, cy);
      }
    }

    ctx.lineCap = "round";
    ctx.lineWidth = 3 / viewScale;
    state.walls.forEach((w) => {
      ctx.strokeStyle = w.door ? "#22c55e" : "#ef4444";
      if (w.door) ctx.setLineDash([8 / viewScale, 6 / viewScale]);
      else ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(w.a.x, w.a.y);
      ctx.lineTo(w.b.x, w.b.y);
      ctx.stroke();
      ctx.setLineDash([]);
      // 端点
      ctx.fillStyle = w.door ? "#16a34a" : "#dc2626";
      for (const p of [w.a, w.b]) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4 / viewScale, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    if (state.drawing && state.start && previewEnd) {
      ctx.strokeStyle = state.mode === "door" ? "#4ade80" : "#60a5fa";
      ctx.lineWidth = 3 / viewScale;
      ctx.setLineDash([6 / viewScale, 4 / viewScale]);
      ctx.beginPath();
      ctx.moveTo(state.start.x, state.start.y);
      ctx.lineTo(previewEnd.x, previewEnd.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 校正点
    for (const p of state.calibratePts) {
      ctx.fillStyle = "#fbbf24";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6 / viewScale, 0, Math.PI * 2);
      ctx.fill();
    }
    if (state.calibratePts.length === 2) {
      ctx.strokeStyle = "#fbbf24";
      ctx.lineWidth = 2 / viewScale;
      ctx.beginPath();
      ctx.moveTo(state.calibratePts[0].x, state.calibratePts[0].y);
      ctx.lineTo(state.calibratePts[1].x, state.calibratePts[1].y);
      ctx.stroke();
    }

    undoBtn.disabled = state.walls.length === 0;
    clearBtn.disabled = state.walls.length === 0;
    segBtn.disabled = state.walls.length < 3;
    buildBtn.disabled = state.walls.length < 3;
    scaleDisplay.textContent = String(Math.round(1 / state.scaleMPerPx));
  }

  function canvasPos(ev) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = state.image.width / canvas.width;
    const scaleY = state.image.height / canvas.height;
    const clientX = ev.clientX ?? ev.touches?.[0]?.clientX;
    const clientY = ev.clientY ?? ev.touches?.[0]?.clientY;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  }

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (state.imageUrl) URL.revokeObjectURL(state.imageUrl);
    state.imageUrl = URL.createObjectURL(file);
    state.name = file.name.replace(/\.[^.]+$/, "");
    nameInput.value = state.name;
    state.walls = [];
    state.segPreview = null;
    roomsList.innerHTML = "";
    const img = new Image();
    img.onload = () => {
      state.image = img;
      redraw();
    };
    img.src = state.imageUrl;
  });

  canvas.addEventListener("mousedown", (ev) => {
    if (!state.image) return;
    if (state.mode === "calibrate") {
      const p = snapPoint(canvasPos(ev));
      state.calibratePts.push(p);
      if (state.calibratePts.length >= 2) {
        const a = state.calibratePts[0];
        const b = state.calibratePts[1];
        const px = Math.hypot(b.x - a.x, b.y - a.y);
        const meters = prompt(`この線分の実長（メートル）を入力\n（図上 ${px.toFixed(0)} px）`, "1.8");
        if (meters && Number(meters) > 0) {
          state.scaleMPerPx = Number(meters) / px;
          status.textContent = `スケール設定: ${Math.round(1 / state.scaleMPerPx)} px = 1m（${Number(meters)}m / ${px.toFixed(0)}px）`;
        }
        state.calibratePts = [];
      }
      redraw();
      return;
    }
    state.drawing = true;
    state.start = snapPoint(canvasPos(ev));
  });

  canvas.addEventListener("mousemove", (ev) => {
    if (!state.drawing || !state.start) return;
    let p = canvasPos(ev);
    p = axisSnap(state.start, p);
    p = snapPoint(p);
    redraw(p);
  });

  canvas.addEventListener("mouseup", (ev) => {
    if (!state.drawing || !state.start) return;
    let end = canvasPos(ev);
    end = axisSnap(state.start, end);
    end = snapPoint(end);
    const dist = Math.hypot(end.x - state.start.x, end.y - state.start.y);
    if (dist > 6) {
      state.walls.push({
        a: { x: state.start.x, y: state.start.y },
        b: { x: end.x, y: end.y },
        door: state.mode === "door",
      });
      state.segPreview = null;
    }
    state.drawing = false;
    state.start = null;
    redraw();
  });

  // touch
  canvas.addEventListener(
    "touchstart",
    (ev) => {
      ev.preventDefault();
      canvas.dispatchEvent(
        new MouseEvent("mousedown", {
          clientX: ev.touches[0].clientX,
          clientY: ev.touches[0].clientY,
        })
      );
    },
    { passive: false }
  );
  canvas.addEventListener(
    "touchmove",
    (ev) => {
      ev.preventDefault();
      canvas.dispatchEvent(
        new MouseEvent("mousemove", {
          clientX: ev.touches[0].clientX,
          clientY: ev.touches[0].clientY,
        })
      );
    },
    { passive: false }
  );
  canvas.addEventListener(
    "touchend",
    (ev) => {
      const t = ev.changedTouches[0];
      canvas.dispatchEvent(
        new MouseEvent("mouseup", { clientX: t.clientX, clientY: t.clientY })
      );
    },
    { passive: false }
  );

  undoBtn.addEventListener("click", () => {
    state.walls.pop();
    state.segPreview = null;
    roomsList.innerHTML = "";
    redraw();
  });
  clearBtn.addEventListener("click", () => {
    state.walls = [];
    state.segPreview = null;
    roomsList.innerHTML = "";
    redraw();
  });

  function runSegment() {
    if (state.walls.length < 3) return null;
    let walls = snapAxisAligned(state.walls);
    walls = snapWallEndpoints(walls, 10);
    const seg = segmentRooms(walls, { cellSize: 6, minAreaCells: 60 });
    state.segPreview = seg;
    roomsList.innerHTML =
      `<p class="rooms-count">${seg.rooms.length} 部屋を検出</p>` +
      seg.rooms
        .map(
          (r, i) => `
      <label class="room-rename">
        <span class="swatch" style="background:${r.color}"></span>
        <input data-idx="${i}" value="${r.name}" />
      </label>`
        )
        .join("");
    roomsList.querySelectorAll("input").forEach((inp) => {
      inp.addEventListener("change", () => {
        const i = Number(inp.dataset.idx);
        if (state.segPreview.rooms[i]) state.segPreview.rooms[i].name = inp.value || `部屋${i + 1}`;
        redraw();
      });
    });
    status.textContent = `${seg.rooms.length} 部屋を分割しました。名前を編集してから「3D化して内覧」を押してください。`;
    redraw();
    return seg;
  }

  segBtn.addEventListener("click", () => runSegment());

  nameInput.addEventListener("change", () => {
    state.name = nameInput.value || state.name;
  });

  return {
    onBuild(cb) {
      buildBtn.addEventListener("click", () => {
        if (!state.segPreview) runSegment();
        if (!state.segPreview || state.segPreview.rooms.length === 0) {
          // フォールバック: 矩形1室
          status.textContent = "部屋を検出できませんでした。外周の壁が閉じているか確認してください。";
        }
        state.name = nameInput.value || state.name;
        const maxY = state.image?.height || 1000;
        const plan = segmentToFloorPlan(
          state.segPreview || { rooms: [], walls: state.walls },
          {
            scaleMPerPx: state.scaleMPerPx,
            maxY,
            name: state.name,
            doors: state.walls.filter((w) => w.door),
          }
        );
        // 壁が少ない場合はトレース壁を直接使う
        if (state.walls.length >= 3) {
          const m = state.scaleMPerPx;
          const toW = (x, y) => ({ x: x * m, z: (maxY - y) * m });
          plan.walls = [
            ...state.walls
              .filter((w) => !w.door)
              .map((w) => ({ a: toW(w.a.x, w.a.y), b: toW(w.b.x, w.b.y) })),
            ...plan.walls.filter((w) => {
              // 南辺玄関用は残す
              return true;
            }),
          ];
          // 重複を減らす: トレース壁 + 玄関開口のみ
          const ent = plan.entrance;
          plan.walls = state.walls
            .filter((w) => !w.door)
            .map((w) => ({ a: toW(w.a.x, w.a.y), b: toW(w.b.x, w.b.y) }));
          // 玄関開口が壁に塞がれないよう、南端付近の壁は残す
          if (ent) {
            plan.doors = [
              {
                a: { x: ent.x - 0.45, z: ent.z },
                b: { x: ent.x + 0.45, z: ent.z },
                label: "玄関",
                exterior: true,
              },
              ...state.walls
                .filter((w) => w.door)
                .map((w) => ({
                  a: toW(w.a.x, w.a.y),
                  b: toW(w.b.x, w.b.y),
                  label: "ドア",
                })),
            ];
          }
        }
        cb(plan, state);
      });
    },
  };
}
