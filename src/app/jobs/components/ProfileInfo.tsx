'use client'

import React from 'react'
import ActionButton from './ActionButton'
import Image from 'next/image'

const ProfileInfo: React.FC = () => {
  return (
    <div className="mt-8 flex w-fit shrink-0 grow basis-0 flex-col self-start">
      <Image
        loading="lazy"
        src=""
        alt="Profile"
        className="ml-2.5 aspect-square w-24 self-center object-contain"
      />
      <h2 className="mt-8 self-center text-2xl text-white">
        Olá, Ana Fernandes
      </h2>
      <div className="mt-9 flex w-[215px] max-w-full justify-between gap-5 self-center text-center">
        <div className="my-auto text-xl text-white">
          <span className="font-bold">20</span>
          <br />
          <span className="text-base">Jobs</span>
        </div>
        <div className="flex gap-3.5 whitespace-nowrap text-base text-amber-300">
          <div className="h-[59px] w-px shrink-0 border border-solid border-white" />
          <div className="my-auto flex flex-col">
            <div className="self-center">(32)</div>
            <Image
              loading="lazy"
              src=""
              alt="Rating"
              className="mt-1.5 aspect-[4.17] w-[125px] object-contain"
            />
          </div>
        </div>
      </div>
      <ActionButton icon="" text="INFO" />
      <ActionButton icon="" text="JOBS" />
      <div className="mt-6 flex gap-6 rounded-3xl bg-zinc-300 px-5 py-6 text-xl text-neutral-600">
        <div className="self-start">
          <span className="text-3xl">+</span>
        </div>
        <div className="w-[117px] shrink grow">POSTAR JOB</div>
        <div className="text-red-500">ver +</div>
      </div>
    </div>
  )
}

export default ProfileInfo
