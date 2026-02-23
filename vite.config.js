import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [
// })

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "reveal",
    "reveal-active",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    
    tailwindcss(),
  
  ],
};