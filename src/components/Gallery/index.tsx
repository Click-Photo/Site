import { ReactNode } from 'react'

interface GalleryProps {
  children: ReactNode
}

export function Gallery({ children }: GalleryProps) {
  return (
    <div className="columns-2 gap-5 space-y-5 overflow-auto">{children}</div>
  )
}
