// Feed.tsx
'use client'
import React from 'react'

interface Photo {
  id: number
  url: string
  description: string
}

interface Job {
  id: number
  title: string
  description: string
  budget: number
  date: string
}

// Dados de exemplo
const photos: Photo[] = [
  {
    id: 1,
    url: 'https://example.com/photo1.jpg',
    description: 'Foto de casamento',
  },
  {
    id: 2,
    url: 'https://example.com/photo2.jpg',
    description: 'Fotos de evento corporativo',
  },
  {
    id: 3,
    url: 'https://example.com/photo3.jpg',
    description: 'Sessão de fotos em estúdio',
  },
  // Adicione mais fotos conforme necessário
]

const jobs: Job[] = [
  {
    id: 1,
    title: 'Sessão de fotos de casamento',
    description: 'Fotos de casamento em local aberto',
    budget: 3000,
    date: '20 DEZ. 2024',
  },
  {
    id: 2,
    title: 'Fotos de aniversário infantil',
    description: 'Cobertura de aniversário para criança',
    budget: 1500,
    date: '15 JAN. 2025',
  },
  {
    id: 3,
    title: 'Fotos corporativas',
    description: 'Fotos para empresa em ambiente de escritório',
    budget: 2000,
    date: '10 FEV. 2025',
  },
  // Adicione mais jobs conforme necessário
]

const userRole: 'cliente' | 'fotografo' = 'fotografo'

const Feed: React.FC = () => {
  return (
    <div className="p-6">
      {userRole === 'fotografo' ? (
        <>
          <h1 className="mb-4 text-2xl font-semibold">Jobs Disponíveis</h1>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="rounded-lg bg-gray-800 p-4 text-white shadow-md"
              >
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-sm">{job.description}</p>
                <p className="font-bold text-green-400">
                  Orçamento: R$ {job.budget}
                </p>
                <p className="text-sm text-gray-400">Data: {job.date}</p>
                <button className="mt-2 rounded bg-blue-500 px-4 py-2 hover:bg-blue-600">
                  Fazer Proposta
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="mb-4 text-2xl font-semibold">
            Portfólio do Fotógrafo
          </h1>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="overflow-hidden rounded-lg bg-gray-200"
              >
                <img
                  src={photo.url}
                  alt={photo.description}
                  className="h-auto w-full"
                />
                <p className="p-2 text-center text-sm">{photo.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Feed
