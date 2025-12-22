import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Portfolio-Webseite/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        architecture: resolve(__dirname, "architecture.html"),
      },
    },
  },
});
