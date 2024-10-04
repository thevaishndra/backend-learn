import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api' : 'http://localhost:3000',//server thinks that it's origin is from same url hence it allows
    },
  },
  plugins: [react()],
})
