import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Resolve '@' to the 'src' folder
    },
  },
  server: {
    hmr: {
      overlay: false, // Disable HMR overlay
    },
  },
});
