import type { Metadata } from 'next'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { primary, secondary } from '@/styles/fonts'

export const metadata: Metadata = {
  // TODO: mudar título e descrição
  title: 'Click!',
  description: 'Plataforma para...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'antialiased bg-black-click text-white',
          primary.className,
          secondary.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
