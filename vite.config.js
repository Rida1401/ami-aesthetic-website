import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'; // Add this import

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({ // Add this plugin configuration
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 70 },
    }),
  ],
});
