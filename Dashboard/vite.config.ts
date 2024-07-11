import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(), // Include the Vite React plugin
  ],
  resolve: {
    alias: {
      // Add an alias for the charting library if necessary
      '@garvae/react-pie-chart': 'path-to-garvae-react-pie-chart'
    }
  }
});
