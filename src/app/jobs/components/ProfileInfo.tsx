'use client'

import React from 'react'
import ActionButton from './ActionButton'

const ProfileInfo: React.FC = () => {
  return (
    <div className="flex flex-col grow shrink-0 self-start mt-8 basis-0 w-fit">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e821c6fbba1556ef0a8c1a4db012ee921a4834dc640ab6a0fdc520a6a110486c?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44"
        alt="Profile"
        className="object-contain self-center ml-2.5 w-24 aspect-square"
      />
      <h2 className="self-center mt-8 text-2xl text-white">
        Olá, Ana Fernandes
      </h2>
      <div className="flex gap-5 justify-between self-center mt-9 max-w-full text-center w-[215px]">
        <div className="my-auto text-xl text-white">
          <span className="font-bold">20</span>
          <br />
          <span className="text-base">Jobs</span>
        </div>
        <div className="flex gap-3.5 text-base text-amber-300 whitespace-nowrap">
          <div className="shrink-0 w-px border border-white border-solid h-[59px]" />
          <div className="flex flex-col my-auto">
            <div className="self-center">(32)</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d75667eaeb7dd914cf77cba9414e8e025d538d22288abaf02ae0d7264f733f?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44"
              alt="Rating"
              className="object-contain mt-1.5 aspect-[4.17] w-[125px]"
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
      <div className="flex gap-6 px-5 py-6 mt-6 text-xl rounded-3xl bg-zinc-300 text-neutral-600">
        <div className="self-start">
          <span className="text-3xl">+</span>
        </div>
        <div className="grow shrink w-[117px]">POSTAR JOB</div>
        <div className="text-red-500">ver +</div>
      </div>
    </div>
  )
}

export default ProfileInfo
