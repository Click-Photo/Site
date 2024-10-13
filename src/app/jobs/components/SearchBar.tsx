'use client'

import Image from 'next/image'
import React from 'react'

const SearchBar: React.FC = () => {
  return (
    <form className="mt-6 flex gap-4 rounded-[30px] bg-neutral-900 px-6 py-2.5 max-md:px-5">
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf0d392748933d9f0ef259df97678d605ef24c7e50d2d9554d1e3d365a9ef45b?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44"
        alt=""
        className="aspect-square w-[34px] shrink-0 object-contain"
      />
      <label htmlFor="search" className="sr-only">
        Pesquisa
      </label>
      <input
        type="text"
        id="search"
        className="mt-3 w-[284px] flex-auto self-start bg-transparent text-white outline-none"
        placeholder="Pesquisa"
      />
    </form>
  )
}

export default SearchBar
