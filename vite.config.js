import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        roadmap: resolve(process.cwd(), 'roadmap.html'),
        error: resolve(process.cwd(), '404.html')
      }
    }
  }
})
