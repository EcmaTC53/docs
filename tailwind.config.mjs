import starlightPlugin from '@astrojs/starlight-tailwind';

const accent = { 200: '#fbb698', 600: '#af4700', 900: '#561f00', 950: '#401500' };
const gray = { 100: '#faf5f4', 200: '#f6ebe9', 300: '#cbbfbc', 400: '#9d8580', 500: '#68524e', 700: '#46332f', 800: '#34211e', 900: '#1f1614' };


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { accent, gray }
    },
  },
  plugins: [starlightPlugin()],
}
