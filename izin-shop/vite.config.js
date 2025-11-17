import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcss from './postcss.config.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss,
  }
})
