import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
// Relative base so assets load on GitHub Pages even when the repo path casing
// differs from a hard-coded "/chiba-lab/" (Pages URLs are case-sensitive).
export default defineConfig({
  plugins: [react(),
            tailwindcss()
  ],
  base: "./",
})
