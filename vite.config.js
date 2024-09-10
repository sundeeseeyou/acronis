import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import liveReload from "vite-plugin-live-reload";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build", // Make sure this matches your expected output
  },
  plugins: [
    react(),
    liveReload("**/*"),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 65,
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
      webp: {
        quality: 75,
      },
    }),
  ],
  base: "/website2",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
