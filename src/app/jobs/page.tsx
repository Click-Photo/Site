// src/app/jobs/page.tsx
'use client' // Client Component

import Image from 'next/image'
import logo from '@/assets/logo.svg'
import React from 'react'
import JobPost from './components/JobPost'
import SearchBar from './components/SearchBar'
import { useRouter } from 'next/navigation'
import ProfileCard from './components/ProfileCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/Button'
import { Play } from 'lucide-react'

const JobListPage: React.FC = () => {
  const router = useRouter()

  // Simulação de lista de jobs
  const jobs = [
    {
      id: '1',
      title: 'Job 1',
      description: 'Lorem ipsum dolor sit amet',
      price: 2500,
      date: '20 DEZ. 2024',
    },
    {
      id: '2',
      title: 'Job 2',
      description: 'Consectetur adipiscing elit',
      price: 2600,
      date: '21 DEZ. 2024',
    },
    {
      id: '3',
      title: 'Job 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quas nam maxime ea itaque totam sit ad molestiae earum culpa voluptates mollitia placeat delectus, id nostrum fugit minus assumenda quam',
      price: 2600,
      date: '21 DEZ. 2024',
    },
  ]

  // Simulação de fotógrafos
  const photographers = [
    {
      name: 'Carolina',
      imageUrl: '',
    },
    {
      name: 'Cris',
      imageUrl: '',
    },
    {
      name: 'Júlia',
      imageUrl: '',
    },
    {
      name: 'Amanda',
      imageUrl: '',
    },
  ]

  const handleViewDetails = (id: string) => {
    router.push(`/jobs/${id}`)
  }

  return (
    <>
      <main className="flex">
        <aside className="fixed h-screen w-1/4 bg-black-click p-4 text-white">
          <div className="mb-8 text-center">
            <Image src={logo} alt="Logo Click" className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold">Olá, Ana Fernandes</h1>
            <p>20 Jobs</p>
            <FontAwesomeIcon
              icon={faStar}
              className="self-center text-lg text-white"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <button className="block rounded-full bg-zinc-300 py-3 text-lg text-neutral-600">
              INFO
            </button>
            <button className="block rounded-full bg-zinc-300 py-3 text-lg text-neutral-600">
              JOBS
            </button>
            <button className="block rounded-full bg-zinc-300 py-3 text-lg text-neutral-600">
              POSTAR JOB
            </button>
          </div>
        </aside>

        {/* Conteúdo principal */}
        <section className="ml-[25%] w-[50%] p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {jobs.map((job) => (
              <JobPost
                key={job.id}
                id={job.id}
                title={job.title}
                description={job.description}
                price={job.price}
                date={job.date}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </section>

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
    </>
  )
}

export default JobListPage
