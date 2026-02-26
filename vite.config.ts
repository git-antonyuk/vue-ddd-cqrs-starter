import { defineConfig } from "vite";
import path from "node:path";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";
import tailwindcss from '@tailwindcss/vite'

const PORT = 3333;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // @ts-ignore
    tailwindcss(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["primevue"],
  },
  server: {
    host: "0.0.0.0",
    port: PORT,
  },
  preview: {
    port: PORT,
  },
});
