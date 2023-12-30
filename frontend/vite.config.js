import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
      proxy: {
      '/api':'https://deployment-server-l3be3gvb0-shaik-fazil-bashas-projects.vercel.app/api/jokes',
      },
      },
  plugins: [react()],
})
