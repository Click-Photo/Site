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
        secondary: 'var(--font-secondary)',
      },
      colors: {
        'black-click': '#0B0B0B',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
