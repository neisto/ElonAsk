import { defineConfig } from 'vite'


export default defineConfig({
    server: {
      // Добавьте ваш хост в allowedHosts
      host: true,
      port: process.env.PORT || 3000
    },
    preview: {
      allowedHosts: ['elonask.onrender.com']
    }
  })