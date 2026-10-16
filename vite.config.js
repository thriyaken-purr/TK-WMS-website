import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { readdirSync } from "node:fs";

const root = fileURLToPath(new URL(".", import.meta.url));
const pages = ["index.html", "solutions.html", "operations.html", "platform-tools.html",
  ...["solutions", "operations", "platform"].flatMap(directory =>
    readdirSync(new URL(`./${directory}/`, import.meta.url))
      .filter(name => name.endsWith(".html")).map(name => `${directory}/${name}`))];

export default defineConfig({
  build: { rollupOptions: { input: pages.map(page => `${root}${page}`) } }
});
