'use client'

import React from 'react'
import ActionButton from './ActionButton'
import Image from 'next/image'

const ProfileInfo: React.FC = () => {
  return (
    <div className="mt-8 flex w-fit shrink-0 grow basis-0 flex-col self-start">
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e821c6fbba1556ef0a8c1a4db012ee921a4834dc640ab6a0fdc520a6a110486c?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44"
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d75667eaeb7dd914cf77cba9414e8e025d538d22288abaf02ae0d7264f733f?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44"
              alt="Rating"
              className="mt-1.5 aspect-[4.17] w-[125px] object-contain"
            />
          </div>
        </div>
      </div>
      <ActionButton
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/86dbb348b160b5890e85d222bee1ca34d0a077b42a2112f851ebc56057f47471?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44"
        text="INFO"
      />
      <ActionButton
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0d4357942408bed686aac9b013e26089a01c48c7baceb956c3b0347b0d570cfa?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44"
        text="JOBS"
      />
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
