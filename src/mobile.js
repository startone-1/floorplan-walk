/**
 * スマホ向け操作
 * - 左半分: タッチ位置に移動スティック出現
 * - 右半分 / 画面ドラッグ: 視点
 * - 大きなタッチ領域・誤操作に強い
 */

export function createMobileControls(root) {
  const el = document.createElement("div");
  el.id = "mobile-controls";
  el.innerHTML = `
    <div class="m-zone m-zone-move" id="m-zone-move" aria-label="移動エリア">
      <div class="joy-float hidden" id="joy-move-float">
        <div class="joy-ring"></div>
        <div class="joy-knob"></div>
      </div>
      <span class="m-zone-hint">ここをタッチして歩く</span>
    </div>
    <div class="m-zone m-zone-look" id="m-zone-look" aria-label="視点エリア">
      <span class="m-zone-hint">ここをスワイプして見回す</span>
    </div>
    <div class="m-quick-bar">
      <button type="button" class="m-btn" id="m-btn-bird" title="俯瞰">🗺️ 上から</button>
      <button type="button" class="m-btn" id="m-btn-map" title="地図">📍 地図</button>
      <button type="button" class="m-btn m-btn-exit" id="m-btn-exit" title="終了">やめる</button>
    </div>
  `;
  root.appendChild(el);

  const state = {
    moveX: 0,
    moveZ: 0,
    lookX: 0,
    lookY: 0,
    lookDeltaX: 0,
    lookDeltaY: 0,
    active: false,
  };

  const zoneMove = el.querySelector("#m-zone-move");
  const zoneLook = el.querySelector("#m-zone-look");
  const joyFloat = el.querySelector("#joy-move-float");
  const joyKnob = el.querySelector(".joy-knob");

  const MAX = 56; // px
  let moveId = null;
  let lookId = null;
  let lookLastX = 0;
  let lookLastY = 0;
  let moveCx = 0;
  let moveCy = 0;

  function setVisible(v) {
    el.classList.toggle("visible", v);
    state.active = v;
    document.body.classList.toggle("is-mobile-tour", v);
  }

  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(max-width: 900px)").matches
    );
  }

  function touchById(e, id) {
    if (e.changedTouches) {
      for (const t of e.changedTouches) {
        if (t.identifier === id) return t;
      }
    }
    if (e.touches) {
      for (const t of e.touches) {
        if (t.identifier === id) return t;
      }
    }
    return null;
  }

  // —— 移動ゾーン（フローティングスティック）——
  zoneMove.addEventListener(
    "touchstart",
    (e) => {
      if (moveId !== null) return;
      const t = e.changedTouches[0];
      e.preventDefault();
      moveId = t.identifier;
      moveCx = t.clientX;
      moveCy = t.clientY;
      joyFloat.classList.remove("hidden");
      joyFloat.style.left = `${moveCx}px`;
      joyFloat.style.top = `${moveCy}px`;
      joyKnob.style.transform = "translate(-50%, -50%)";
      state.moveX = 0;
      state.moveZ = 0;
      zoneMove.classList.add("active");
    },
    { passive: false }
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      if (moveId !== null) {
        const t = touchById(e, moveId);
        if (t) {
          e.preventDefault();
          let dx = t.clientX - moveCx;
          let dy = t.clientY - moveCy;
          const len = Math.hypot(dx, dy);
          if (len > MAX) {
            dx = (dx / MAX) * MAX;
            dy = (dy / MAX) * MAX;
            // 中心を少し追従（歩きやすい）
            const excess = len - MAX;
            moveCx += (t.clientX - moveCx) * 0.08 * (excess / len);
            moveCy += (t.clientY - moveCy) * 0.08 * (excess / len);
            joyFloat.style.left = `${moveCx}px`;
            joyFloat.style.top = `${moveCy}px`;
            dx = t.clientX - moveCx;
            dy = t.clientY - moveCy;
            const len2 = Math.hypot(dx, dy) || 1;
            if (len2 > MAX) {
              dx = (dx / len2) * MAX;
              dy = (dy / len2) * MAX;
            }
          }
          joyKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
          state.moveX = dx / MAX;
          state.moveZ = -dy / MAX; // 上 = 前進
        }
      }
      if (lookId !== null) {
        const t = touchById(e, lookId);
        if (t) {
          e.preventDefault();
          const dx = t.clientX - lookLastX;
          const dy = t.clientY - lookLastY;
          lookLastX = t.clientX;
          lookLastY = t.clientY;
          state.lookDeltaX += dx;
          state.lookDeltaY += dy;
        }
      }
    },
    { passive: false }
  );

  function endMove(e) {
    if (moveId === null) return;
    if (e.changedTouches) {
      let ok = false;
      for (const t of e.changedTouches) if (t.identifier === moveId) ok = true;
      if (!ok) return;
    }
    moveId = null;
    state.moveX = 0;
    state.moveZ = 0;
    joyFloat.classList.add("hidden");
    zoneMove.classList.remove("active");
  }

  // —— 視点ゾーン（スワイプ）——
  function startLook(e) {
    if (lookId !== null) return;
    const t = e.changedTouches ? e.changedTouches[0] : e;
    if (e.changedTouches) e.preventDefault();
    lookId = t.identifier ?? "mouse";
    lookLastX = t.clientX;
    lookLastY = t.clientY;
    zoneLook.classList.add("active");
  }

  function endLook(e) {
    if (lookId === null) return;
    if (e.changedTouches) {
      let ok = false;
      for (const t of e.changedTouches) if (t.identifier === lookId) ok = true;
      if (!ok && lookId !== "mouse") return;
    }
    lookId = null;
    zoneLook.classList.remove("active");
  }

  zoneLook.addEventListener("touchstart", startLook, { passive: false });
  zoneLook.addEventListener("touchend", endLook);
  zoneLook.addEventListener("touchcancel", endLook);

  window.addEventListener("touchend", (e) => {
    endMove(e);
    endLook(e);
  });
  window.addEventListener("touchcancel", (e) => {
    endMove(e);
    endLook(e);
  });

  // キャンバス全体でも視点スワイプ（右寄りタッチ）
  // main 側から bindCanvas で接続

  window.addEventListener("orientationchange", () => {
    state.moveX = state.moveZ = 0;
    state.lookDeltaX = state.lookDeltaY = 0;
    moveId = lookId = null;
    joyFloat.classList.add("hidden");
  });

  /**
   * 毎フレーム: 蓄積した lookDelta を消費して返す
   */
  function consumeLookDelta() {
    const dx = state.lookDeltaX;
    const dy = state.lookDeltaY;
    state.lookDeltaX = 0;
    state.lookDeltaY = 0;
    return { dx, dy };
  }

  function bindCanvasLook(canvas) {
    // 画面右半分や、ジョイスティック以外のタッチで視点
    canvas.addEventListener(
      "touchstart",
      (e) => {
        if (!state.active) return;
        for (const t of e.changedTouches) {
          // 左40%は移動ゾーン優先
          if (t.clientX < window.innerWidth * 0.42) continue;
          if (lookId !== null) continue;
          e.preventDefault();
          lookId = t.identifier;
          lookLastX = t.clientX;
          lookLastY = t.clientY;
        }
      },
      { passive: false }
    );
  }

  return {
    state,
    setVisible,
    isTouchDevice,
    showIfTouch() {
      setVisible(isTouchDevice());
    },
    hide() {
      setVisible(false);
      document.body.classList.remove("is-mobile-tour");
      state.moveX = state.moveZ = 0;
      state.lookDeltaX = state.lookDeltaY = 0;
    },
    consumeLookDelta,
    bindCanvasLook,
    el,
  };
}
