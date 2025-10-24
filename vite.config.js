import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Auto-detect environment: local vs GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/image/' : '/', 
})
