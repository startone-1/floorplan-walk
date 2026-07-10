import { defineConfig } from "vite";

// GitHub Pages では /リポジトリ名/ 配下に置かれるため base を合わせる
// ローカル開発: npm run dev は base があっても問題なし
export default defineConfig({
  base: "/floorplan-walk/",
  server: {
    port: 5175,
    host: true, // 同じWi-Fiのスマホから触れる
    open: false,
  },
  preview: {
    port: 4175,
    host: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
