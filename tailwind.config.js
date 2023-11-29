/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      dropShadow: {
        flat: 'drop-shadow: 3px 3px 0px 2px #000'}
    },
  },
  plugins: [],
}

