import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'

import Link from 'next/link'
import { Input } from './Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { PhotographerData } from '@/@types/photographersData'

interface PhotographersSearchProps {
  photographersList: PhotographerData[]
}

export function PhotographersSearch({
  photographersList,
}: PhotographersSearchProps) {
  const [search, setSearch] = useState('')

  const filteredPhotographers =
    search.length > 0
      ? photographersList.filter((photographer) =>
          photographer.nome.toLowerCase().includes(search.toLowerCase()),
        )
      : []

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <h2 className="text-2xl font-bold uppercase">Fotógrafos</h2>
        <Input
          className="w-full rounded-lg py-2 md:w-60 md:flex-none md:rounded-full"
          variant="icon-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} color="#000" />}
        />
      </div>
      <Swiper slidesPerView="auto" spaceBetween={32} modules={[FreeMode]}>
        {search.length > 0 ? (
          filteredPhotographers.length > 0 ? (
            filteredPhotographers.map((photographer) => (
              <SwiperSlide
                key={photographer.id}
                className="flex max-w-16 flex-col items-center gap-1"
              >
                <Link href={`/fotografo/${photographer.id}`}>
                  <span className="block w-full text-center text-sm">
                    {photographer.nome}
                  </span>
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <div className="flex w-full place-items-center">
              Fotógrafos não encontrados
            </div>
          )
        ) : (
          photographersList.map((photographer) => (
            <SwiperSlide
              key={photographer.id}
              className="flex max-w-16 flex-col items-center gap-1"
            >
              <Link href={`/fotografo/${photographer.id}`}>
                <span className="block w-full text-center text-sm">
                  {photographer.nome}
                </span>
              </Link>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  )
}
