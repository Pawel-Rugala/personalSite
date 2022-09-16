const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
 theme: {
  extend: {
   colors: {
    gr: '#00E0D9',
   },
   fontFamily: {
    sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
   },
   fontSize: {
    big: '4.5rem',
   },
  },
 },
 plugins: [],
}
