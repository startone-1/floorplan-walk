/**
 * 物件データ永続化（localStorage）
 * - 組み込みサンプル + ユーザー登録物件
 * - 間取りは templateId 参照 or フルJSON
 */

import { apartment1ldk } from "./floorplans/apartment1ldk.js";
import { houseBuilding } from "./floorplans/houseBuilding.js";

const KEY = "floorplan-walk-props-v2";
const TRACED_KEY = "floorplan-walk-traced-v1";

export const PLAN_TEMPLATES = {
  "apt-1ldk": { label: "マンション 1LDK", plan: apartment1ldk },
  "house-2f": { label: "戸建て 2階建（階段あり）", plan: houseBuilding },
};

/** 組み込みサンプル（編集不可・削除不可） */
export const BUILTIN_PROPERTIES = [
  {
    id: "apt-shibuya",
    builtin: true,
    title: "パークサイド神宮前",
    unit: "305号室",
    type: "マンション",
    layout: "1LDK",
    area: "約40㎡",
    price: "月額 12.8万円",
    priceNote: "管理費 8,000円 別",
    address: "東京都渋谷区神宮前3丁目25-18",
    lat: 35.6702,
    lng: 139.7065,
    built: "2018年3月",
    structure: "RC造 5階建 / 3階部分",
    access: "東京メトロ「明治神宮前」徒歩6分",
    exteriorNotes:
      "タイル張りの落ち着いた外観。オートロック・宅配ボックス付き。エントランスは石張りで清潔感があります。",
    features: ["南向きバルコニー", "オートロック", "宅配BOX", "室内洗濯機置場", "インターネット無料"],
    description:
      "コンパクトながら動線の良い1LDK。リビングから洋室へのアクセスがスムーズで、単身〜DINKS向けです。",
    planImage: null,
    planTemplateId: "apt-1ldk",
    accent: "#3b82f6",
  },
  {
    id: "house-setagaya",
    builtin: true,
    title: "桜丘の家",
    unit: "1〜2階（戸建て）",
    type: "戸建て",
    layout: "4LDK相当",
    area: "延床 約95㎡",
    price: "販売 6,280万円",
    priceNote: "土地付き戸建て",
    address: "東京都世田谷区桜丘2丁目15-8",
    lat: 35.6418,
    lng: 139.6275,
    built: "2022年1月",
    structure: "木造2階建",
    access: "小田急線「千歳船橋」徒歩9分",
    exteriorNotes:
      "白い外壁にウッドデッキが映える現代和風の外観。玄関ポーチから入り、階段で2階の居室へ上がれます。",
    features: ["2階建て", "階段歩行可", "ウッドデッキ", "パントリー", "SIC", "和室"],
    description:
      "1階に広々LDKと和室、2階に主寝室・子供室。階段を歩いて階を移動できます。",
    // BASE_URL 付きで解決（GitHub Pages 対応）— 先頭スラッシュ単独は使わない
    planImage: "plans/house1f.jpg",
    planTemplateId: "house-2f",
    accent: "#059669",
  },
];

function loadUserProps() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveUserProps(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function loadTracedPlans() {
  try {
    return JSON.parse(localStorage.getItem(TRACED_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveTracedPlan(plan, meta = {}) {
  const list = loadTracedPlans();
  const entry = {
    id: plan.id || `traced-${Date.now()}`,
    name: meta.name || plan.title || "トレース物件",
    savedAt: new Date().toISOString(),
    plan,
  };
  const idx = list.findIndex((x) => x.id === entry.id);
  if (idx >= 0) list[idx] = entry;
  else list.unshift(entry);
  localStorage.setItem(TRACED_KEY, JSON.stringify(list.slice(0, 30)));
  return entry;
}

/** 表示用フル物件リスト */
export function listProperties() {
  const user = loadUserProps();
  return [...user, ...BUILTIN_PROPERTIES];
}

export function getProperty(id) {
  return listProperties().find((p) => p.id === id) || BUILTIN_PROPERTIES[0];
}

/** floorPlan 実体を解決 */
export function resolveFloorPlan(prop) {
  if (prop.floorPlan) return prop.floorPlan;
  if (prop.planTemplateId && PLAN_TEMPLATES[prop.planTemplateId]) {
    return PLAN_TEMPLATES[prop.planTemplateId].plan;
  }
  if (prop.tracedPlanId) {
    const t = loadTracedPlans().find((x) => x.id === prop.tracedPlanId);
    if (t) return t.plan;
  }
  return apartment1ldk;
}

export function upsertProperty(data) {
  if (data.builtin) throw new Error("組み込み物件は編集できません");
  const list = loadUserProps();
  const id = data.id || `prop-${Date.now()}`;
  const record = {
    ...data,
    id,
    builtin: false,
    updatedAt: new Date().toISOString(),
    createdAt: data.createdAt || new Date().toISOString(),
  };
  // floorPlan が大きいので template/traced 参照を優先
  if (record.planTemplateId && record.floorPlan) {
    delete record.floorPlan;
  }
  const idx = list.findIndex((p) => p.id === id);
  if (idx >= 0) list[idx] = record;
  else list.unshift(record);
  saveUserProps(list);
  return record;
}

export function deleteProperty(id) {
  const list = loadUserProps().filter((p) => p.id !== id);
  saveUserProps(list);
}

export function exportPropertiesJson() {
  return JSON.stringify(
    { version: 2, exportedAt: new Date().toISOString(), properties: loadUserProps() },
    null,
    2
  );
}

export function importPropertiesJson(text) {
  const data = JSON.parse(text);
  const props = data.properties || data;
  if (!Array.isArray(props)) throw new Error("不正なJSONです");
  const list = loadUserProps();
  for (const p of props) {
    if (!p.id || p.builtin) continue;
    const idx = list.findIndex((x) => x.id === p.id);
    if (idx >= 0) list[idx] = p;
    else list.push(p);
  }
  saveUserProps(list);
  return list.length;
}

/** 住所ジオコーディング（OpenStreetMap Nominatim） */
export async function geocodeAddress(address) {
  if (!address || !address.trim()) throw new Error("住所を入力してください");
  const url =
    "https://nominatim.openstreetmap.org/search?" +
    new URLSearchParams({
      q: address,
      format: "json",
      limit: "1",
      countrycodes: "jp",
    });
  const res = await fetch(url, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error("ジオコーディングに失敗しました");
  const arr = await res.json();
  if (!arr.length) throw new Error("住所が見つかりませんでした。緯度経度を手入力してください");
  return {
    lat: parseFloat(arr[0].lat),
    lng: parseFloat(arr[0].lon),
    displayName: arr[0].display_name,
  };
}

export function mapsEmbedUrl(prop) {
  if (prop.lat && prop.lng) {
    return `https://maps.google.com/maps?q=${prop.lat},${prop.lng}&z=17&hl=ja&output=embed`;
  }
  const q = encodeURIComponent(prop.address || "");
  return `https://maps.google.com/maps?q=${q}&z=17&hl=ja&output=embed`;
}

export function streetViewEmbedUrl(prop) {
  const lat = prop.lat || 35.6812;
  const lng = prop.lng || 139.7671;
  return `https://maps.google.com/maps?q=&layer=c&cbll=${lat},${lng}&cbp=11,0,0,0,0&hl=ja&output=svembed`;
}

export function mapsOpenUrl(prop) {
  if (prop.lat && prop.lng) {
    return `https://www.google.com/maps/search/?api=1&query=${prop.lat},${prop.lng}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(prop.address || "")}`;
}

export function streetViewOpenUrl(prop) {
  const lat = prop.lat || 35.6812;
  const lng = prop.lng || 139.7671;
  return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}`;
}

export function emptyPropertyForm() {
  return {
    id: "",
    title: "",
    unit: "",
    type: "マンション",
    layout: "",
    area: "",
    price: "",
    priceNote: "",
    address: "",
    lat: "",
    lng: "",
    built: "",
    structure: "",
    access: "",
    exteriorNotes: "",
    description: "",
    features: "",
    planTemplateId: "apt-1ldk",
    tracedPlanId: "",
    accent: "#3b82f6",
  };
}
