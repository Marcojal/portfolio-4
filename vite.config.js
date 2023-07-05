import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://marcojal.github.io/portfolio-4/',
  plugins: [react()],
})
