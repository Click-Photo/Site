'use client'

import Image from 'next/image'
import React from 'react'

interface ActionButtonProps {
  icon: string
  text: string
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, text }) => {
  return (
    <div className="mt-7 flex w-full justify-between gap-5 rounded-3xl bg-zinc-300 px-7 py-5 text-xl max-md:px-5">
      <div className="flex gap-5 whitespace-nowrap text-neutral-600">
        <Image
          loading="lazy"
          src={icon}
          alt=""
          className="aspect-square w-6 shrink-0 object-contain"
        />
        <div className="my-auto">{text}</div>
      </div>
      <div className="my-auto text-red-500">ver +</div>
    </div>
  )
}

export default ActionButton
