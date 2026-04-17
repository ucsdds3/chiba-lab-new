import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
// Project Pages URL: https://ucsdds3.github.io/chiba-lab-new/
export default defineConfig({
  plugins: [react(),
            tailwindcss()
  ],
  base: "/chiba-lab-new/",
})
