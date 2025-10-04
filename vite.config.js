import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      colors: {
        "black-dark": "#131212ff",
        "black-dark-100": "#313030ff",
        "blue-symplia": "#07314A",
        "cyan-symplia": "#0DD6B1",
        "yellow-symplia": "#f0e221ff",
        "green-symplia": "#0cd45fff",
        "danger-symplia": "#e01717ff",
        "white-symplia-10": "#f7f2f2ff",
        "white-symplia-100": "#f1ededff",
        "white-symplia-200": "#d6d2d2ff",
      },
    },
  },
  server: {
    port: 8080,
  },
});
