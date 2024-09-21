import { Inter, K2D } from 'next/font/google'

export const primary = K2D({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-primary',
})

export const secondary = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-secondary',
})
