import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: { // config of Vitest
    environment: 'happy-dom'
  }
})
