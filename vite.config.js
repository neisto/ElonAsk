import { defineConfig } from 'vite'


export default defineConfig({
    server: {
      host: true,
      port: process.env.PORT || 4000
    },
    preview: {
      allowedHosts: ['elonask.onrender.com']
    }
  })