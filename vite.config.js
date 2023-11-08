import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import browserslistToEsbuild from "browserslist-to-esbuild";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    target: browserslistToEsbuild(),
  },
  server: {
    port: 3000,
  },
});
