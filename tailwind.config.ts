import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'var(--font-primary)',
        secondary: 'var(--font-secondary)',
      },
      colors: {
        'black-click': '#0B0B0B',
        'gray-dark-click': '#141414',
        'gray-light-click': '#DCDCDC',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
