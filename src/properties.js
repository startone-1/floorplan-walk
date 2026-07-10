import { apartment1ldk } from "./floorplans/apartment1ldk.js";
import { house1f } from "./floorplans/house1f.js";

/**
 * 物件カタログ
 * 住所から Google Maps / ストリートビューを表示
 */
export const properties = [
  {
    id: "apt-shibuya",
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
    floorPlan: apartment1ldk,
    accent: "#3b82f6",
  },
  {
    id: "house-setagaya",
    title: "桜丘の家",
    unit: "1階（戸建て）",
    type: "戸建て",
    layout: "LDK + 和室ほか",
    area: "1階 約55㎡（LDK 37.55㎡）",
    price: "販売 6,280万円",
    priceNote: "土地付き戸建て",
    address: "東京都世田谷区桜丘2丁目15-8",
    lat: 35.6418,
    lng: 139.6275,
    built: "2022年1月",
    structure: "木造2階建 / 1階部分を内覧",
    access: "小田急線「千歳船橋」徒歩9分",
    exteriorNotes:
      "白い外壁にウッドデッキが映える現代和風の外観。玄関ポーチ・南デッキからLDKへつながる開放的な動線です。",
    features: ["ウッドデッキ", "パントリー", "SIC", "和室続き間", "対面キッチン"],
    description:
      "広々LDKに和室が続く1階プラン。家族が自然と集まるリビングと、来客時に使える和室が魅力です。",
    planImage: "/plans/house1f.jpg",
    floorPlan: house1f,
    accent: "#059669",
  },
];

export function getProperty(id) {
  return properties.find((p) => p.id === id) || properties[0];
}

/** Google Maps 埋め込みURL（APIキー不要） */
export function mapsEmbedUrl(prop) {
  const q = encodeURIComponent(prop.address);
  return `https://maps.google.com/maps?q=${q}&z=17&hl=ja&output=embed`;
}

/** ストリートビュー埋め込み（座標ベース） */
export function streetViewEmbedUrl(prop) {
  const { lat, lng } = prop;
  // svembed はキー不要の埋め込み形式
  return `https://maps.google.com/maps?q=&layer=c&cbll=${lat},${lng}&cbp=11,0,0,0,0&hl=ja&output=svembed`;
}

/** Google Maps アプリ/Webで開くリンク */
export function mapsOpenUrl(prop) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(prop.address)}`;
}

export function streetViewOpenUrl(prop) {
  return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${prop.lat},${prop.lng}`;
}
