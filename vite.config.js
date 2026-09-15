import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: 'localhost',
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  preview: {
    host: 'localhost',
    port: 4173
  }
})