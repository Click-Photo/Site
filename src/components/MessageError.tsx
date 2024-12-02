import { cn } from '@/lib/utils'
import { useState } from 'react'
import { X } from 'lucide-react'

interface MessageErrorProps {
  message: string | undefined
}

export function MessageError({ message }: MessageErrorProps) {
  const [isShow, setIsShow] = useState(!!message)

  if (isShow) {
    return (
      <div
        className={cn(
          'fixed left-1/2 right-1/2 top-8 w-max -translate-x-1/2 rounded-lg bg-red-500 px-8 py-4 text-white transition-all',
        )}
      >
        <p className="text-sm">{message}</p>
        <div className="">
          <X
            onClick={() => setIsShow(false)}
            className="absolute right-2 top-2 h-4 w-4"
          />
        </div>
      </div>
    )
  }
}
