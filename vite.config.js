import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("./index.html", import.meta.url)),
        operations: fileURLToPath(new URL("./operations.html", import.meta.url)),
        platform: fileURLToPath(new URL("./platform-tools.html", import.meta.url))
      }
    }
  }
});
