import type { Metadata } from 'next'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { primary, secondary } from '@/styles/fonts'
import { AuthProvider } from '@/contexts/AuthContext'
import { QueryProvider } from '@/lib/ReactQuery'

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
          'min-h-screen overflow-x-hidden bg-black-click text-white antialiased',
          primary.className,
          primary.variable,
          secondary.variable,
        )}
      >
        <AuthProvider>
          <QueryProvider>{children}</QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
