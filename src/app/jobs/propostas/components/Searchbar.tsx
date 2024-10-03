'use client'

import React from 'react'

const SearchBar: React.FC = () => (
  <div className="flex gap-4 px-6 py-2.5 mt-6 text-xl bg-neutral-900 rounded-[30px] max-md:px-5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf0d392748933d9f0ef259df97678d605ef24c7e50d2d9554d1e3d365a9ef45b?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44"
      alt=""
      className="object-contain shrink-0 aspect-square w-[34px]"
    />
    <input
      type="text"
      className="flex-auto self-start mt-3 w-[284px] bg-transparent text-white"
      placeholder="Pesquisa"
      aria-label="Pesquisa"
    />
  </div>
)

export default SearchBar
