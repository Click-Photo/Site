'use client'

import React from 'react'

interface ActionButtonProps {
  icon: string
  text: string
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, text }) => {
  return (
    <div className="flex gap-5 justify-between px-7 py-5 mt-7 w-full text-xl rounded-3xl bg-zinc-300 max-md:px-5">
      <div className="flex gap-5 whitespace-nowrap text-neutral-600">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">{text}</div>
      </div>
      <div className="my-auto text-red-500">ver +</div>
    </div>
  )
}

export default ActionButton
