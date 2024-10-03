// src/app/jobs/page.tsx
'use client' // Client Component

import Image from 'next/image'
import logo from '@/assets/logo.svg'
import React from 'react'
import JobPost from './components/JobPost'
import SearchBar from './components/SearchBar'
import { useRouter } from 'next/navigation'
import ProfileCard from './components/ProfileCard'

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
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/f9725cf3c1b411b2e759ff00d7d9327a41bb1142ce7189b7d1f9b68529563a93?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44',
    },
    {
      id: '2',
      title: 'Job 2',
      description: 'Consectetur adipiscing elit',
      price: 2600,
      date: '21 DEZ. 2024',
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/7f58324b21f10e4ac30cd22d833165b5e8d6780a9d4aa6c69ec2125c8be27e44?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44',
    },
    {
      id: '3',
      title: 'Job 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quas nam maxime ea itaque totam sit ad molestiae earum culpa voluptates mollitia placeat delectus, id nostrum fugit minus assumenda quam',
      price: 2600,
      date: '21 DEZ. 2024',
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/7f58324b21f10e4ac30cd22d833165b5e8d6780a9d4aa6c69ec2125c8be27e44?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44',
    },
    // Adicione mais jobs conforme necessário
  ]

  // Simulação de fotógrafos
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
  ]

  const handleViewDetails = (id: string) => {
    router.push(`/jobs/${id}`)
  }

  return (
    <main className="flex">
      <aside className="w-1/4 p-4 bg-black-click text-white h-screen fixed">
        <div className="text-center mb-8">
          <Image src={logo} alt="Logo Click" className="mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Olá, Ana Fernandes</h1>
          <p>20 Jobs</p>
          <p className="text-yellow-400">⭐ 4.5</p>
        </div>
        <div className="flex flex-col space-y-4">
          <button className="block py-3 text-lg bg-zinc-300 rounded-full text-neutral-600">INFO</button>
          <button className="block py-3 text-lg bg-zinc-300 rounded-full text-neutral-600">JOBS</button>
          <button className="block py-3 text-lg bg-zinc-300 rounded-full text-neutral-600">POSTAR JOB</button>
        </div>
        
      </aside>
      

      {/* Conteúdo principal */}
      <section className="ml-[25%] w-[50%] p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <JobPost
              key={job.id}
              id={job.id}
              title={job.title}
              description={job.description}
              price={job.price}
              date={job.date}
              imageUrl={job.imageUrl}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </section>

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

export default JobListPage
