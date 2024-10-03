'use client'

import React from 'react'

interface JobCardProps {
  date: string
  price: string
  photographerName: string
  photographerImage: string
}

const JobCard: React.FC<JobCardProps> = ({
  date,
  price,
  photographerName,
  photographerImage,
}) => (
  <section className="flex flex-col pb-8 mx-auto mt-12 w-full rounded-3xl bg-zinc-300 bg-opacity-90 max-md:mt-10 max-md:max-w-full">
    <div className="flex z-10 gap-2.5 self-center py-1 pr-2 pl-6 ml-12 max-w-full text-xs font-bold leading-none text-center whitespace-nowrap rounded-xl bg-neutral-900 text-zinc-500 w-[114px] max-md:pl-5">
      <div className="my-auto">ACEITO</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/76965eef2a4929b493118c2b0e5f22b8c002860a99ef52af73d0cf2c5a041428?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44"
        alt=""
        className="object-contain shrink-0 aspect-square w-[29px]"
      />
    </div>
    <div className="flex flex-wrap gap-5 justify-between px-8 py-4 font-bold bg-white rounded-3xl text-neutral-950 max-md:px-5 max-md:max-w-full">
      <div className="text-base leading-none">
        <span className="text-xs ">DATA DO JOB</span> {date}
      </div>
      <div className="text-3xl text-center">{price}</div>
    </div>
    <div className="flex gap-5 justify-between mt-4 mr-8 ml-8 text-center text-black max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-6 items-start text-2xl font-bold leading-none">
        <img
          loading="lazy"
          src={photographerImage}
          alt={`Profile picture of ${photographerName}`}
          className="object-contain shrink-0 aspect-[0.96] rounded-[30px] w-[47px]"
        />
        <div className="flex flex-col mt-2">
          <div>{photographerName}</div>
          <div className="flex shrink-0 mt-4 h-[30px] w-[147px]" />
        </div>
      </div>
      <div className="self-start text-xl leading-none">Ver Perfil</div>
    </div>
    <div className="flex gap-5 justify-between self-center mt-12 max-w-full text-xl font-bold leading-none text-center text-white whitespace-nowrap w-[435px] max-md:mt-10">
      <button className="px-11 py-6 bg-red-900 rounded-3xl max-md:px-5">
        Recusar
      </button>
      <button className="px-11 py-6 bg-green-700 rounded-3xl max-md:px-5">
        Aceitar
      </button>
    </div>
  </section>
)

export default JobCard
