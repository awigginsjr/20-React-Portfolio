import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react' 

// https://vitejs.dev/config/
export default defineConfig({ // Vite configuration
  plugins: [react()], 
  // build: {
  //   outDir: 'dist', // Ensure this matches your Netlify publish directory
  // },
  // server: {
  //   port: 3000,
  //   open: true,
  // }, 
})
