import * as THREE from "three";
import {
  listProperties,
  getProperty,
  resolveFloorPlan,
  upsertProperty,
  deleteProperty,
  geocodeAddress,
  mapsEmbedUrl,
  streetViewEmbedUrl,
  mapsOpenUrl,
  streetViewOpenUrl,
  emptyPropertyForm,
  exportPropertiesJson,
  importPropertiesJson,
  saveTracedPlan,
  loadTracedPlans,
} from "./store.js";
import {
  EYE_H,
  PLAYER_R,
  resolveCollision,
  roomAt,
  buildingBounds,
  resolveElevation,
  getLevel,
  FLOOR_H_DEFAULT,
} from "./core.js";
import { buildFromPlan } from "./builder.js";
import { drawMinimap } from "./minimap.js";
import { initTracer } from "./tracer.js";
import { createMobileControls } from "./mobile.js";
import { makeEnvMap } from "./textures.js";

// ——— DOM ———
const canvas = document.getElementById("c");
const screenCatalog = document.getElementById("screen-catalog");
const screenDetail = document.getElementById("screen-detail");
const screenTracer = document.getElementById("screen-tracer");
const screenRegister = document.getElementById("screen-register");
const catalogGrid = document.getElementById("catalog-grid");
const hud = document.getElementById("hud");
const roomLabel = document.getElementById("room-label");
const floorBadge = document.getElementById("floor-badge");
const minimapCanvas = document.getElementById("minimap");
const viewToggle = document.getElementById("view-toggle");
const clickHint = document.getElementById("click-hint");
const mapsOverlay = document.getElementById("maps-overlay");
const overlayIframe = document.getElementById("overlay-iframe");
const overlayAddress = document.getElementById("overlay-address");
const registerForm = document.getElementById("register-form");

// ——— State ———
let currentProp = null;
let currentBuilding = null;
let colliders = [];
let buildingMesh = null;
let touring = false;
let mapMode = "map";
let playerLevel = 0;

// ——— Renderer ———
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;

const scene = new THREE.Scene();
// 空グラデーション風
scene.background = new THREE.Color("#8eb4d4");
scene.fog = new THREE.FogExp2(0x9bb8d0, 0.018);

try {
  scene.environment = makeEnvMap(renderer);
} catch {
  /* env optional */
}

scene.add(new THREE.HemisphereLight(0xe8f2ff, 0x6b5a48, 0.55));
const sun = new THREE.DirectionalLight(0xfff1d6, 2.2);
sun.position.set(14, 22, 10);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.bias = -0.00025;
sun.shadow.normalBias = 0.03;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 60;
sun.shadow.camera.left = -24;
sun.shadow.camera.right = 24;
sun.shadow.camera.top = 24;
sun.shadow.camera.bottom = -24;
scene.add(sun);
scene.add(new THREE.AmbientLight(0xfff5eb, 0.22));
// 窓からの補助光
const fillSun = new THREE.DirectionalLight(0xc8dfff, 0.45);
fillSun.position.set(-8, 10, -6);
scene.add(fillSun);

const camera = new THREE.PerspectiveCamera(
  68,
  window.innerWidth / window.innerHeight,
  0.08,
  100
);

const player = {
  x: 0,
  y: EYE_H,
  z: 0,
  yaw: 0,
  pitch: 0,
  footY: 0,
  onStairs: false,
};
const keys = new Set();
let pointerLocked = false;
let birdView = false;
let birdT = 0;
let birdCam = { x: 0, y: 16, z: 0 };

const mobile = createMobileControls(document.getElementById("mobile-root"));
mobile.bindCanvasLook(canvas);

// スマホ下部クイックボタン
function wireMobileQuickButtons() {
  const bird = document.getElementById("m-btn-bird");
  const map = document.getElementById("m-btn-map");
  const exit = document.getElementById("m-btn-exit");
  bird?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (touring) toggleBird();
  });
  map?.addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("btn-maps-overlay")?.click();
  });
  exit?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (touring) endTour();
  });
}
wireMobileQuickButtons();

// ——— Screens ———
function showScreen(name) {
  screenCatalog.classList.toggle("hidden", name !== "catalog");
  screenDetail.classList.toggle("hidden", name !== "detail");
  screenTracer.classList.toggle("hidden", name !== "tracer");
  screenRegister.classList.toggle("hidden", name !== "register");
}

function renderCatalog() {
  const props = listProperties();
  if (!props.length) {
    catalogGrid.innerHTML = `
      <div class="catalog-empty">
        <p>まだ物件がありません</p>
        <button type="button" class="btn primary" id="btn-empty-register">＋ 最初の物件を登録</button>
      </div>`;
    document.getElementById("btn-empty-register")?.addEventListener("click", () => openRegister());
    return;
  }
  catalogGrid.innerHTML = props
    .map((p) => {
      const multi =
        p.planTemplateId === "house-2f" ||
        (p.unit && String(p.unit).includes("2階"));
      return `
    <button type="button" class="prop-card" data-id="${p.id}">
      <div class="prop-thumb" style="background: linear-gradient(135deg, ${p.accent || "#3b82f6"}88, #0f172a);">
        <span class="type-pill">${escapeHtml(p.type || "")}${p.builtin ? "" : " · 登録"}${multi ? " · 2階OK" : ""}</span>
        <span class="price-pill">${escapeHtml(p.price || "")}</span>
      </div>
      <div class="prop-body">
        <h3>${escapeHtml(p.title)}</h3>
        <p class="unit">${escapeHtml(p.unit || "")}</p>
        <div class="prop-meta">
          <span>${escapeHtml(p.layout || "")}</span>
          <span>${escapeHtml(p.area || "")}</span>
          <span>${escapeHtml(p.built || "")}</span>
        </div>
        <p class="prop-addr">📍 ${escapeHtml(p.address || "")}</p>
      </div>
    </button>`;
    })
    .join("");
  catalogGrid.querySelectorAll(".prop-card").forEach((el) => {
    el.addEventListener("click", () => openDetail(el.dataset.id));
  });
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function setMapIframe(iframe, mode, prop) {
  iframe.src = mode === "street" ? streetViewEmbedUrl(prop) : mapsEmbedUrl(prop);
}

function openDetail(id) {
  currentProp = getProperty(id);
  const p = currentProp;
  document.getElementById("detail-title").textContent = p.title;
  document.getElementById("detail-type").textContent = p.type || "";
  document.getElementById("detail-name").textContent = p.title;
  document.getElementById("detail-unit").textContent = p.unit || "";
  document.getElementById("detail-price").textContent = p.price || "";
  document.getElementById("detail-price-note").textContent = p.priceNote || "";
  document.getElementById("detail-address").textContent = p.address || "";
  document.getElementById("detail-layout").textContent = p.layout || "";
  document.getElementById("detail-area").textContent = p.area || "";
  document.getElementById("detail-built").textContent = [p.built, p.structure].filter(Boolean).join(" / ");
  document.getElementById("detail-access").textContent = p.access || "";
  document.getElementById("detail-exterior").textContent = p.exteriorNotes || "";
  document.getElementById("detail-desc").textContent = p.description || "";
  const feats = Array.isArray(p.features)
    ? p.features
    : String(p.features || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
  document.getElementById("detail-features").innerHTML = feats.map((f) => `<li>${escapeHtml(f)}</li>`).join("");

  const planWrap = document.getElementById("detail-plan-wrap");
  const planImg = document.getElementById("detail-plan-img");
  if (p.planImage) {
    planWrap.hidden = false;
    planImg.src = p.planImage;
  } else {
    planWrap.hidden = true;
  }

  const editBtn = document.getElementById("btn-edit-prop");
  const delBtn = document.getElementById("btn-delete-prop");
  editBtn.style.display = p.builtin ? "none" : "";
  delBtn.style.display = p.builtin ? "none" : "";

  mapMode = "map";
  document.querySelectorAll("#screen-detail .map-tabs .tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.map === "map");
  });
  setMapIframe(document.getElementById("map-iframe"), "map", p);
  document.getElementById("link-maps").href = mapsOpenUrl(p);
  document.getElementById("link-street").href = streetViewOpenUrl(p);
  showScreen("detail");
}

document.getElementById("btn-back-catalog").addEventListener("click", () => {
  showScreen("catalog");
  renderCatalog();
});

document.querySelectorAll("#screen-detail .map-tabs .tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    if (!currentProp) return;
    mapMode = tab.dataset.map;
    document.querySelectorAll("#screen-detail .map-tabs .tab").forEach((t) => {
      t.classList.toggle("active", t.dataset.map === mapMode);
    });
    setMapIframe(document.getElementById("map-iframe"), mapMode, currentProp);
  });
});

// ——— Register form ———
function openRegister(editProp = null) {
  registerForm.reset();
  document.getElementById("register-heading").textContent = editProp ? "物件を編集" : "物件を登録";
  const data = editProp
    ? {
        ...editProp,
        features: Array.isArray(editProp.features) ? editProp.features.join(", ") : editProp.features || "",
        lat: editProp.lat ?? "",
        lng: editProp.lng ?? "",
      }
    : emptyPropertyForm();

  for (const [k, v] of Object.entries(data)) {
    const el = registerForm.elements.namedItem(k);
    if (el && "value" in el) el.value = v ?? "";
  }

  // traced options
  const tracedSel = document.getElementById("traced-plan-select");
  const traced = loadTracedPlans();
  tracedSel.innerHTML =
    traced.length === 0
      ? `<option value="">（トレース済みなし — 先に間取り取込）</option>`
      : traced.map((t) => `<option value="${t.id}">${escapeHtml(t.name)}</option>`).join("");

  const tmpl = registerForm.elements.namedItem("planTemplateId");
  updateTracedVisibility(tmpl.value);
  showScreen("register");
}

function updateTracedVisibility(val) {
  document.getElementById("traced-select-wrap").classList.toggle("hidden", val !== "traced");
}

document.getElementById("plan-template-select").addEventListener("change", (e) => {
  updateTracedVisibility(e.target.value);
});

document.getElementById("btn-open-register").addEventListener("click", () => openRegister());
document.getElementById("btn-back-from-register").addEventListener("click", () => {
  showScreen("catalog");
  renderCatalog();
});

document.getElementById("btn-geocode").addEventListener("click", async () => {
  const addr = registerForm.elements.namedItem("address").value;
  const st = document.getElementById("geocode-status");
  st.textContent = "住所を検索中…";
  try {
    const g = await geocodeAddress(addr);
    registerForm.elements.namedItem("lat").value = g.lat;
    registerForm.elements.namedItem("lng").value = g.lng;
    st.textContent = `✓ ${g.displayName}`;
  } catch (err) {
    st.textContent = "✗ " + (err.message || "検索失敗");
  }
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(registerForm);
  const data = Object.fromEntries(fd.entries());
  data.lat = data.lat === "" ? null : parseFloat(data.lat);
  data.lng = data.lng === "" ? null : parseFloat(data.lng);
  data.features = String(data.features || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (data.planTemplateId === "traced") {
    data.planTemplateId = null;
    if (!data.tracedPlanId) {
      alert("トレース済み間取りを選ぶか、先に「間取り取込」を行ってください");
      return;
    }
  } else {
    data.tracedPlanId = null;
  }
  if (!data.id) delete data.id;
  const saved = upsertProperty(data);
  openDetail(saved.id);
  renderCatalog();
});

document.getElementById("btn-edit-prop").addEventListener("click", () => {
  if (currentProp && !currentProp.builtin) openRegister(currentProp);
});

document.getElementById("btn-delete-prop").addEventListener("click", () => {
  if (!currentProp || currentProp.builtin) return;
  if (!confirm(`「${currentProp.title}」を削除しますか？`)) return;
  deleteProperty(currentProp.id);
  currentProp = null;
  showScreen("catalog");
  renderCatalog();
});

document.getElementById("btn-export").addEventListener("click", () => {
  const blob = new Blob([exportPropertiesJson()], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `floorplan-walk-properties-${Date.now()}.json`;
  a.click();
});

document.getElementById("import-json").addEventListener("change", async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    const n = importPropertiesJson(text);
    alert(`${n} 件のユーザー物件を読み込みました`);
    renderCatalog();
  } catch (err) {
    alert("読込失敗: " + err.message);
  }
  e.target.value = "";
});

// ——— Tour ———
function clearBuilding() {
  if (buildingMesh) {
    scene.remove(buildingMesh);
    buildingMesh.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        mats.forEach((m) => {
          if (m.map) m.map.dispose();
          m.dispose();
        });
      }
    });
    buildingMesh = null;
  }
}

function loadPlan(plan) {
  clearBuilding();
  const built = buildFromPlan(plan);
  buildingMesh = built.group;
  colliders = built.colliders;
  currentBuilding = built.building;
  scene.add(buildingMesh);

  const b = built.bounds;
  const maxLevel = Math.max(...currentBuilding.levels.map((l) => l.level || 0));
  const H = currentBuilding.floorHeight || FLOOR_H_DEFAULT;
  birdCam = { x: b.cx, y: 14 + maxLevel * H, z: b.cz - 3 };

  const spawn = currentBuilding.spawn || plan.spawn;
  player.x = spawn.x;
  player.z = spawn.z;
  player.footY = 0;
  player.onStairs = false;
  player.y = EYE_H;
  player.yaw = spawn.yaw ?? 0;
  player.pitch = 0;
  playerLevel = 0;
  birdView = false;
  birdT = 0;
  viewToggle.classList.remove("active");
  viewToggle.textContent = "上から見る";
}

function startTour(plan, prop) {
  if (prop) currentProp = prop;
  loadPlan(plan);
  touring = true;
  showScreen("none");
  screenCatalog.classList.add("hidden");
  screenDetail.classList.add("hidden");
  screenTracer.classList.add("hidden");
  screenRegister.classList.add("hidden");
  hud.classList.remove("hidden");
  clickHint.classList.remove("hidden");
  const tourTitle = document.getElementById("tour-prop-title");
  if (tourTitle) tourTitle.textContent = prop?.title || currentProp?.title || "";
  updateFloorButtons();
  // 操作ガイド（8秒 or 歩行 / 「わかった」で閉じる）
  const guide = document.getElementById("tour-guide");
  if (guide) {
    clearTimeout(guide._t);
    const skip = sessionStorage.getItem("tour-guide-dismissed") === "1";
    if (skip) {
      guide.classList.add("hidden");
    } else {
      guide.classList.remove("hidden");
      guide._t = setTimeout(() => guide.classList.add("hidden"), 8000);
    }
  }
  if (mobile.isTouchDevice()) {
    mobile.showIfTouch();
    document.body.classList.add("is-touch-ui");
    // スマホはポインターロック不要。ヒントを短く
    clickHint.classList.remove("hidden");
    setTimeout(() => {
      if (touring) clickHint.classList.add("hidden");
    }, 3500);
  } else {
    document.body.classList.remove("is-touch-ui");
    canvas.requestPointerLock?.();
  }
}

document.getElementById("btn-start-tour").addEventListener("click", () => {
  if (!currentProp) return;
  startTour(resolveFloorPlan(currentProp), currentProp);
});

document.getElementById("btn-exit-tour").addEventListener("click", () => endTour());

function endTour() {
  touring = false;
  hud.classList.add("hidden");
  clickHint.classList.add("hidden");
  mapsOverlay.classList.add("hidden");
  mobile.hide();
  if (document.pointerLockElement) document.exitPointerLock();
  if (currentProp) openDetail(currentProp.id);
  else {
    showScreen("catalog");
    renderCatalog();
  }
}

// ——— Tracer ———
document.getElementById("btn-open-tracer").addEventListener("click", () => showScreen("tracer"));
document.getElementById("btn-back-from-tracer").addEventListener("click", () => {
  showScreen("catalog");
  renderCatalog();
});

const tracer = initTracer(document.getElementById("tracer-root"));
tracer.onBuild((plan, state) => {
  const entry = saveTracedPlan(plan, { name: state.name });
  const prop = upsertProperty({
    title: state.name || "トレース物件",
    unit: "トレース生成",
    type: "カスタム",
    layout: `${plan.rooms?.length || 0}室`,
    area: "—",
    price: "要確認",
    address: "住所未設定（登録画面で実住所を入力）",
    lat: 35.6812,
    lng: 139.7671,
    exteriorNotes: "間取り図トレースから生成。物件登録で住所・価格を追記できます。",
    description: "壁トレース＋部屋自動分割",
    features: ["ユーザー作成", "トレース"],
    tracedPlanId: entry.id,
    planTemplateId: null,
    accent: "#8b5cf6",
  });
  currentProp = prop;
  startTour(plan, prop);
});

// maps overlay
document.getElementById("btn-maps-overlay").addEventListener("click", () => {
  if (!currentProp) return;
  if (document.pointerLockElement) document.exitPointerLock();
  overlayAddress.textContent = currentProp.address || "";
  setMapIframe(overlayIframe, "map", currentProp);
  mapsOverlay.classList.remove("hidden");
});
document.getElementById("btn-close-maps").addEventListener("click", () => {
  mapsOverlay.classList.add("hidden");
});
document.querySelectorAll("[data-overlay-map]").forEach((tab) => {
  tab.addEventListener("click", () => {
    if (!currentProp) return;
    const mode = tab.dataset.overlayMap;
    document.querySelectorAll("[data-overlay-map]").forEach((t) => {
      t.classList.toggle("active", t.dataset.overlayMap === mode);
    });
    setMapIframe(overlayIframe, mode, currentProp);
  });
});

// ——— Input ———
// 座標系: yaw=0 で +Z 正面。右移動 = +X 側 = (cos, -sin)
// マウス右 = 右を向く（yaw 増加）
window.addEventListener("keydown", (e) => {
  if (touring) {
    // 内覧中は矢印でページが動かないようにする
    if (
      e.code === "ArrowUp" ||
      e.code === "ArrowDown" ||
      e.code === "ArrowLeft" ||
      e.code === "ArrowRight" ||
      e.code === "Space"
    ) {
      e.preventDefault();
    }
  }
  keys.add(e.code);
  if (e.code === "KeyB" && touring) toggleBird();
  // 1 / 2 で階ジャンプ（不動産屋が説明しやすい）
  if (touring && currentBuilding && !birdView) {
    if (e.code === "Digit1" || e.code === "Numpad1") jumpToFloor(0);
    if (e.code === "Digit2" || e.code === "Numpad2") jumpToFloor(1);
  }
});
window.addEventListener("keyup", (e) => keys.delete(e.code));

document.addEventListener("pointerlockchange", () => {
  pointerLocked = document.pointerLockElement === canvas;
  if (pointerLocked) clickHint.classList.add("hidden");
  else if (touring && !mobile.isTouchDevice()) clickHint.classList.remove("hidden");
});

canvas.addEventListener("click", () => {
  if (!touring || birdView) return;
  if (!mapsOverlay.classList.contains("hidden")) return;
  if (!mobile.isTouchDevice()) canvas.requestPointerLock();
  else clickHint.classList.add("hidden");
});

document.addEventListener("mousemove", (e) => {
  if (!pointerLocked || birdView || !touring) return;
  const sens = 0.0022;
  // マウスを右に動かす → 右を向く
  player.yaw -= e.movementX * sens;
  player.pitch -= e.movementY * sens;
  player.pitch = Math.max(-1.2, Math.min(1.2, player.pitch));
});

viewToggle.addEventListener("click", () => toggleBird());

function toggleBird() {
  birdView = !birdView;
  viewToggle.classList.toggle("active", birdView);
  viewToggle.textContent = birdView ? "歩いて見る" : "上から見る";
  if (birdView && pointerLocked) document.exitPointerLock();
}

/** 階へワープ（説明用・2階以上がある物件のみ） */
function jumpToFloor(level) {
  if (!currentBuilding?.levels) return;
  const lv = getLevel(currentBuilding, level);
  if (!lv) return;
  const H = currentBuilding.floorHeight || FLOOR_H_DEFAULT;

  // 代表的な部屋の中心へ（階段・屋外は避ける）
  const prefer =
    level === 0
      ? ["LDK", "リビング・ダイニング", "ホール", "玄関"]
      : ["主寝室", "階段ホール", "廊下", "洋室"];
  let room =
    prefer.map((n) => lv.rooms?.find((r) => r.name === n || r.name.includes(n))).find(Boolean) ||
    lv.rooms?.find((r) => !["階段", "バルコニー", "ポーチ", "屋外", "ウッドデッキ"].includes(r.name)) ||
    lv.rooms?.[0];

  if (room?.points?.length) {
    player.x = room.points.reduce((s, p) => s + p.x, 0) / room.points.length;
    player.z = room.points.reduce((s, p) => s + p.z, 0) / room.points.length;
  } else if (lv.stairs?.[0]) {
    const st = lv.stairs[0];
    player.x = (st.minX + st.maxX) / 2;
    player.z = (st.minZ + st.maxZ) / 2;
  }

  playerLevel = level;
  player.footY = level * H;
  player.onStairs = false;
  player.y = player.footY + EYE_H;
  player.pitch = 0;
  updateFloorButtons();
  document.getElementById("tour-guide")?.classList.add("hidden");
}

function updateFloorButtons() {
  const wrap = document.getElementById("floor-jumps");
  if (!wrap || !currentBuilding) return;
  const levels = currentBuilding.levels || [];
  if (levels.length < 2) {
    wrap.classList.add("hidden");
    return;
  }
  wrap.classList.remove("hidden");
  wrap.querySelectorAll("[data-floor]").forEach((btn) => {
    const lv = Number(btn.dataset.floor);
    btn.classList.toggle("active", lv === playerLevel);
    btn.disabled = !getLevel(currentBuilding, lv);
  });
}

function setCeilingsVisible(visible) {
  if (!buildingMesh) return;
  buildingMesh.traverse((obj) => {
    if (obj.userData?.isCeiling || obj.userData?.hideInBird) obj.visible = visible;
  });
}

function updateCamera() {
  const t = birdT;
  setCeilingsVisible(t < 0.45);
  if (t > 0.01) {
    camera.position.set(
      THREE.MathUtils.lerp(player.x, birdCam.x, t),
      THREE.MathUtils.lerp(player.y, birdCam.y, t),
      THREE.MathUtils.lerp(player.z, birdCam.z, t)
    );
    camera.up.set(0, 1, 0);
    if (t > 0.4 && currentBuilding) {
      const b = buildingBounds(currentBuilding);
      const H = currentBuilding.floorHeight || FLOOR_H_DEFAULT;
      camera.lookAt(b.cx, playerLevel * H * 0.5, b.cz);
    } else {
      lookFP();
    }
  } else {
    camera.up.set(0, 1, 0);
    camera.position.set(player.x, player.y, player.z);
    lookFP();
  }
}

function lookFP() {
  const lookX = player.x + Math.sin(player.yaw) * Math.cos(player.pitch);
  const lookY = player.y + Math.sin(player.pitch);
  const lookZ = player.z + Math.cos(player.yaw) * Math.cos(player.pitch);
  camera.lookAt(lookX, lookY, lookZ);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ——— Loop ———
const clock = new THREE.Clock();
const SPEED = 2.8;

function tick() {
  requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.05);

  if (touring && currentBuilding) {
    const targetT = birdView ? 1 : 0;
    birdT += (targetT - birdT) * Math.min(1, dt * 4);
    const H = currentBuilding.floorHeight || FLOOR_H_DEFAULT;

    if (!birdView) {
      // スマホ: スワイプ視点（ピクセル → 角度）
      if (mobile.state.active) {
        const look = mobile.consumeLookDelta();
        const sens = 0.0045; // 指スワイプ用（やや敏感）
        player.yaw -= look.dx * sens;
        player.pitch -= look.dy * sens;
        player.pitch = Math.max(-1.15, Math.min(1.15, player.pitch));
        if (
          mobile.state.moveX ||
          mobile.state.moveZ ||
          look.dx ||
          look.dy
        ) {
          clickHint.classList.add("hidden");
          document.getElementById("tour-guide")?.classList.add("hidden");
        }
      }

      // mx: 右が +, mz: 前が +
      let mx = 0;
      let mz = 0;
      if (keys.has("KeyW") || keys.has("ArrowUp")) mz += 1;
      if (keys.has("KeyS") || keys.has("ArrowDown")) mz -= 1;
      if (keys.has("KeyA") || keys.has("ArrowLeft")) mx -= 1;
      if (keys.has("KeyD") || keys.has("ArrowRight")) mx += 1;
      mx += mobile.state.moveX;
      mz += mobile.state.moveZ;

      if (mx !== 0 || mz !== 0) {
        const len = Math.hypot(mx, mz) || 1;
        mx /= len;
        mz /= len;
        const sin = Math.sin(player.yaw);
        const cos = Math.cos(player.yaw);
        // スマホはやや速く歩く
        const spd = SPEED * (mobile.state.active ? 1.15 : 1);
        const dx = (sin * mz - cos * mx) * spd * dt;
        const dz = (cos * mz + sin * mx) * spd * dt;

        let r = resolveCollision(player.x + dx, player.z, PLAYER_R, colliders, player.footY);
        r = resolveCollision(r.x, player.z + dz, PLAYER_R, colliders, player.footY);
        player.x = r.x;
        player.z = r.z;
        document.getElementById("tour-guide")?.classList.add("hidden");
      }

      // 階段・高さ（端部進入 + 床固定で落下・めり込み防止）
      const elev = resolveElevation(
        {
          x: player.x,
          z: player.z,
          footY: player.footY,
          level: playerLevel,
          onStairs: player.onStairs,
        },
        currentBuilding
      );
      player.footY = elev.footY;
      playerLevel = elev.level;
      player.onStairs = elev.onStairs;
      // スムーズに目線を追従（急落を抑える）
      const targetEye = player.footY + EYE_H;
      player.y += (targetEye - player.y) * Math.min(1, dt * 14);
      // 大きくズレたら即合わせ
      if (Math.abs(player.y - targetEye) > 0.6) player.y = targetEye;
    }

    updateCamera();

    const lv = getLevel(currentBuilding, playerLevel);
    const room = roomAt(player.x, player.z, lv?.rooms || []);
    const flabel = lv?.name || `${playerLevel + 1}F`;
    roomLabel.textContent = room === "屋外" ? "屋外（玄関へ進んでください）" : `${flabel} · ${room}`;
    floorBadge.textContent = flabel;
    drawMinimap(minimapCanvas, lv, player, flabel);
    updateFloorButtons();

    // 物件名（お客様向け）
    const tourTitle = document.getElementById("tour-prop-title");
    if (tourTitle && currentProp) {
      tourTitle.textContent = currentProp.title || "";
    }
  } else {
    camera.position.set(0, 8, 12);
    camera.lookAt(0, 0, 0);
  }

  renderer.render(scene, camera);
}

// 階ジャンプボタン
document.getElementById("floor-jumps")?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-floor]");
  if (!btn || !touring) return;
  jumpToFloor(Number(btn.dataset.floor));
});

document.getElementById("btn-dismiss-guide")?.addEventListener("click", () => {
  const guide = document.getElementById("tour-guide");
  if (guide) {
    clearTimeout(guide._t);
    guide.classList.add("hidden");
  }
  try {
    sessionStorage.setItem("tour-guide-dismissed", "1");
  } catch {
    /* ignore */
  }
});

// boot
renderCatalog();
showScreen("catalog");
tick();
