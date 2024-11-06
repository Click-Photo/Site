'use client'
import React from 'react'
import ProfileCard from './components/ProfileCard'
import JobCard from './components/JobCard'
import SearchBar from './components/Searchbar'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



const MyComponent: React.FC = () => {
  const photographers = [
    {
      name: 'Carolina',
      imageUrl:
        '',
    },
    {
      name: 'Cris',
      imageUrl:
        '',
    },
    {
      name: 'Júlia',
      imageUrl:
        '',
    },
    {
      name: 'Amanda',
      imageUrl:
        '',
    },
  ]

  return (
    <main className="flex h-screen overflow-hidden bg-neutral-950">
      {/* Barra lateral */}
      <aside className="flex w-1/4 flex-col items-center bg-black-click py-10 text-white">
      <Image src={logo} alt="Logo Click" />
        <h1 className="mt-6 text-2xl">Olá, Ana Fernandes</h1>
        <div className="mt-6 text-center">
          <p className="text-lg">20 Jobs</p>
          <div className="mt-3 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faStar} className="text-lg text-white self-center" />
            <span className="text-yellow-500">(32)</span>
           
          </div>
        </div>
        <nav className="mt-12 w-full space-y-4 text-center">
          <a
            href="#info"
            className="block rounded-full bg-zinc-300 py-3 text-lg text-neutral-600"
          >
            <FontAwesomeIcon icon={faUser} className="text-lg" /> INFO
          </a>

          <a
            href="#jobs"
            className="block rounded-full bg-zinc-300 py-3 text-lg text-neutral-600"
          >
          <FontAwesomeIcon icon={faBriefcase} className="text-lg" /> 
                        JOBS
          </a>
          <a
            href="#post-job"
            className="block rounded-full bg-zinc-300 py-3 text-lg text-neutral-600"
          >
                        <FontAwesomeIcon icon={faPlus} className="text-lg" />  POSTAR JOB
          </a>
        </nav>
      </aside>

      {/* Divisor */}
      <div className="w-0.5 bg-white" />

      {/* Área de Jobs */}
      <section className="flex-grow overflow-y-auto px-10 py-5">
        <JobCard
          date="18 DEZ. 2024"
          price="R$ 2.460"
          photographerName="Nome Do Fotografo"
          photographerImage=""
        />
        <JobCard
          date="18 DEZ. 2024"
          price="R$ 2.590"
          photographerName="Nome Do Fotografo"
          photographerImage=""
        />
      </section>

      {/* Seção de Fotógrafos */}
      <aside className="w-1/4 bg-neutral-800 p-6 text-white">
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
