import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   server: {
    // host: "0.0.0.0",
    host: "72.61.2.161",
    port: 5300,
    allowedHosts: ["dashboard.shxshofficial.com", "www.dashboard.shxshofficial.com"],    
  },
})
