'use client'

import Image from 'next/image'
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
  <section className="mx-auto mt-12 flex w-full flex-col rounded-3xl bg-zinc-300 bg-opacity-90 pb-8 max-md:mt-10 max-md:max-w-full">
    <div className="flex flex-wrap justify-between gap-5 rounded-3xl bg-white px-8 py-4 font-bold text-neutral-950 max-md:max-w-full max-md:px-5">
      <div className="text-base leading-none">
        <span className="text-xs">DATA DO JOB</span> {date}
      </div>
      <div className="text-center text-3xl">{price}</div>
    </div>
    <div className="ml-8 mr-8 mt-4 flex justify-between gap-5 text-center text-black max-md:mr-2.5 max-md:max-w-full">
      <div className="flex items-start gap-6 text-2xl font-bold leading-none">
        <Image
          loading="lazy"
          src=""
          alt={`Foto do Fotografo ${photographerName}`}
          className="aspect-[0.96] w-[47px] shrink-0 rounded-[30px] object-contain"
        /> 
        <div className="mt-2 flex flex-col">
          <div>{photographerName}</div>
          <div className="mt-4 flex h-[30px] w-[147px] shrink-0" />
        </div>
      </div>
      <div className="self-start text-xl leading-none">Ver Perfil</div>
    </div>
    <div className="mt-12 flex w-[435px] max-w-full justify-between gap-5 self-center whitespace-nowrap text-center text-xl font-bold leading-none text-white max-md:mt-10">
      <button className="rounded-3xl bg-red-900 px-11 py-6 max-md:px-5">
        Recusar
      </button>
      <button className="rounded-3xl bg-green-700 px-11 py-6 max-md:px-5">
        Aceitar
      </button>
    </div>
  </section>
)

export default JobCard
