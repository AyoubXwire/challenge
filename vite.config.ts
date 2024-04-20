import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 4000,
  },
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  }
})
