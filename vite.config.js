import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// VITE_BASE_URL is injected by the GitHub Pages workflow (/cv-website/).
// Local dev and Docker both leave it unset → defaults to '/'.
export default defineConfig({
  plugins: [vue()],
  base: process.env.VITE_BASE_URL || '/',
})
