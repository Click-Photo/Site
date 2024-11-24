import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Photographer } from './FeedCardClient'
import Link from 'next/link'
import { Input } from './Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

interface PhotographersSearchProps {
  photographersList: Photographer[]
}

export function PhotographersSearch({
  photographersList,
}: PhotographersSearchProps) {
  const [search, setSearch] = useState('')

  const filteredPhotographers =
    search.length > 0
      ? photographersList.filter((photographer) =>
          photographer.name.toLowerCase().includes(search.toLowerCase()),
        )
      : []

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <h2 className="font-bold">Fotógrafos</h2>
        <Input
          className="w-full rounded-lg py-2 md:w-60 md:flex-none md:rounded-full"
          variant="icon-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} color="#000" />}
        />
      </div>
      <Swiper slidesPerView="auto" spaceBetween={32} modules={[FreeMode]}>
        {search.length > 0
          ? filteredPhotographers.map((photographer) => (
              <SwiperSlide
                key={photographer.id}
                className="flex max-w-16 flex-col items-center gap-1"
              >
                <Link href={`/fotografo/${photographer.id}`}>
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={photographer.photo}
                      className="h-full w-full object-cover"
                    />
                    <AvatarFallback className="text-black">
                      {photographer.name.substring(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="block w-full text-center text-sm">
                    {photographer.name}
                  </span>
                </Link>
              </SwiperSlide>
            ))
          : photographersList.map((photographer) => (
              <SwiperSlide
                key={photographer.id}
                className="flex max-w-16 flex-col items-center gap-1"
              >
                <Link href={`/fotografo/${photographer.id}`}>
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={photographer.photo}
                      className="h-full w-full object-cover"
                    />
                    <AvatarFallback className="text-black">
                      {photographer.name.substring(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="block w-full text-center text-sm">
                    {photographer.name}
                  </span>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}
