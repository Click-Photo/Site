'use client'
import React from 'react'
import ProfileCard from './components/ProfileCard'
import JobCard from './components/JobCard'
import SearchBar from './components/Searchbar'

const MyComponent: React.FC = () => {
  const photographers = [
    {
      name: 'Carolina',
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/b9319905863f33ce622e5fee7ad39a067c3599dd4bc425dc8935c3c3c7aef03b?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44',
    },
    {
      name: 'Cris',
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/2ddff8c5eb0c286576d981905700be3f5a91aa31a66e2e2e1bdef5265c0e6176?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44',
    },
    {
      name: 'Júlia',
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/35f8bf9de05ffa564ee34ed869f09c24a2b04a39162180dd1b5ffa253dcedab2?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44',
    },
    {
      name: 'Amanda',
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/a80a5566016abc84002913addc62498abb22b63a97c7c9f6d0830bbb9f7358c5?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44',
    },
  ];

  return (
    <main className="flex h-screen overflow-hidden bg-neutral-950">
      {/* Barra lateral */}
      <aside className="w-1/4 flex flex-col items-center py-10 bg-black-click text-white">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c68902f1b403a59d12a231425ec202dc2db161f6fed23bb37b54771d37852985?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44"
          alt="User avatar"
          className="object-contain w-24 h-24 rounded-full"
        />
        <h1 className="mt-6 text-2xl">Olá, Ana Fernandes</h1>
        <div className="mt-6 text-center">
          <p className="text-lg">20 Jobs</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-yellow-500">(32)</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d75667eaeb7dd914cf77cba9414e8e025d538d22288abaf02ae0d7264f733f?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44"
              alt="Rating stars"
              className="object-contain w-24"
            />
          </div>
        </div>
        <nav className="mt-12 space-y-4 w-full text-center">
          <a
            href="#info"
            className="block py-3 text-lg bg-zinc-300 rounded-full text-neutral-600"
          >
            INFO
          </a>
          <a
            href="#jobs"
            className="block py-3 text-lg bg-zinc-300 rounded-full text-neutral-600"
          >
            JOBS
          </a>
          <a
            href="#post-job"
            className="block py-3 text-lg bg-zinc-300 rounded-full text-neutral-600"
          >
            POSTAR JOB
          </a>
        </nav>
      </aside>

      {/* Divisor */}
      <div className="w-0.5 bg-white" />

      {/* Área de Jobs */}
      <section className="flex-grow px-10 py-5 overflow-y-auto">
        <JobCard
          date="18 DEZ. 2024"
          price="R$ 2.460"
          photographerName="Nome Do Fotografo"
          photographerImage="https://cdn.builder.io/api/v1/image/assets/TEMP/d8988aec39d7202ed4a5b19ef8ead2aa5cdb7435c6f8be549d17e6e29eb3cbe7?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44"
        />
        <JobCard
          date="18 DEZ. 2024"
          price="R$ 2.590"
          photographerName="Nome Do Fotografo"
          photographerImage="https://cdn.builder.io/api/v1/image/assets/TEMP/c2ae8727a07bea9d875e6770cf7b673d68211ac5eedcaf4a625a32176f349747?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44"
        />
      </section>

      {/* Seção de Fotógrafos */}
      <aside className="w-1/4 p-6 bg-neutral-800 text-white">
        <h2 className="mb-6 text-xl">Fotógrafos</h2>
        <div className="flex space-x-4">
          {photographers.map((photographer) => (
            <ProfileCard
              key={photographer.name}
              name={photographer.name}
              imageUrl={photographer.imageUrl}
            />
          ))}
        </div>
        <SearchBar />
      </aside>
    </main>
  )
}

export default MyComponent
