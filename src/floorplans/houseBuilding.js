/**
 * 戸建て 2階建てビルディングデータ
 * house1f + house2f + 階段接続
 */
import { WALL_H } from "../core.js";
import { house1f } from "./house1f.js";
import { house2f } from "./house2f.js";

const FLOOR_H = 2.85;

/** 1F に階段ゾーンを追加したコピー */
const level0 = {
  ...house1f,
  level: 0,
  name: "1F",
  // 階段歩行領域（狭めにして誤進入・落下を防ぐ）
  stairs: [
    {
      id: "main-stair",
      minX: 7.35,
      maxX: 8.55,
      minZ: 3.55,
      maxZ: 5.15,
      lowZ: 3.55,
      highZ: 5.15,
      fromLevel: 0,
      toLevel: 1,
      upIsHighZ: true,
    },
  ],
  walls: [
    ...house1f.walls,
    // 階段囲い（1F）
    { a: { x: 7.25, z: 3.5 }, b: { x: 7.25, z: 5.2 } },
    { a: { x: 8.65, z: 3.5 }, b: { x: 8.65, z: 4.15 } },
    { a: { x: 8.65, z: 4.85 }, b: { x: 8.65, z: 5.2 } },
    { a: { x: 7.25, z: 3.5 }, b: { x: 8.65, z: 3.5 } },
  ],
  rooms: [
    ...house1f.rooms,
    {
      name: "階段",
      color: "#d4c4a8",
      floor: "#c8b898",
      // 床は描画しない（void）— builder が name===階段 をスキップ
      noFloor: true,
      points: [
        { x: 7.25, z: 3.5 },
        { x: 8.65, z: 3.5 },
        { x: 8.65, z: 5.2 },
        { x: 7.25, z: 5.2 },
      ],
    },
  ],
  doors: [
    ...house1f.doors,
    { a: { x: 8.65, z: 4.15 }, b: { x: 8.65, z: 4.85 }, label: "階段" },
  ],
};

export const houseBuilding = {
  id: "house-building",
  multiFloor: true,
  floorHeight: FLOOR_H,
  wallHeight: WALL_H,
  entrance: house1f.entrance,
  spawn: house1f.spawn,
  exterior: {
    style: "house",
    floors: 2,
    unitFloor: 1,
    facadeColor: "#f2ebe0",
    accentColor: "#5c4033",
    roofColor: "#4a5568",
  },
  levels: [level0, { ...house2f, level: 1, name: "2F" }],
};

/** 単一フロア plan を multiFloor 形式に正規化 */
export function normalizeBuilding(plan) {
  if (!plan) return null;
  if (plan.multiFloor && plan.levels) return plan;
  return {
    id: plan.id,
    multiFloor: true,
    floorHeight: plan.floorHeight || FLOOR_H,
    wallHeight: plan.wallHeight || WALL_H,
    entrance: plan.entrance,
    spawn: plan.spawn,
    exterior: plan.exterior,
    levels: [
      {
        level: 0,
        name: "1F",
        wallHeight: plan.wallHeight || WALL_H,
        rooms: plan.rooms || [],
        walls: plan.walls || [],
        doors: plan.doors || [],
        windows: plan.windows || [],
        furniture: plan.furniture || [],
        stairs: plan.stairs || [],
      },
    ],
  };
}
