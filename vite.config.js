import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // 1) Все пути в index.html и подключениях будут относительными
  base: "./",

  plugins: [react()],

  build: {
    // 2) Папка сборки
    outDir: "docs",
    // (опционально) если хотите менять папку для ассетов,
    // используйте assetsDir: 'assets'
  },
});
