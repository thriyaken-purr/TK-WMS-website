import { defineConfig, loadEnv } from "vite";
import ellaHandler from "./api/ella.js";

const localEllaApi = {
  name: "local-ella-api",
  configureServer(server) {
    server.middlewares.use("/api/ella", (request, response, next) => {
      ellaHandler(request, response).catch(next);
    });
  }
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  for (const key of ["OPENAI_API_KEY", "OPENAI_MODEL"]) {
    if (!process.env[key] && env[key]) process.env[key] = env[key];
  }

  return {
    plugins: [localEllaApi]
  };
});
