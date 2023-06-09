/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      white: '#ffffff',
      black: '#0f0f0f',
      gray: {
        50: '#f9f9f9',
        100: '#f2f2f2',
        200: '#e5e5e5',
        300: '#d9d9d9',
        400: '#bfbfbf',
        500: '#a6a6a6',
        600: '#8c8c8c',
        700: '#737373',
        800: '#595959',
        900: '#404040',
      },
      primary: {
        // gold 24k
        50: '#fff9e6',
        100: '#fff3cc',
        200: '#ffe699',
        300: '#ffdb4d',
        400: '#ffd11a',
        500: '#e6b800',
        600: '#b38f00',
        700: '#806600',
        800: '#4d3d00',
        900: '#1a1400',
      }
    },
  },
  plugins: [],
}
