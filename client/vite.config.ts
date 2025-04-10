// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://supergearclone.vercel.app', // Change this to the backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewriting '/api' to match backend path
      },
    },
  },
});
