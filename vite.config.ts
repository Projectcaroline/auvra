import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
