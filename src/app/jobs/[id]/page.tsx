'use client'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '@/components/Button' // Certifique-se de que esse caminho está correto

const JobDetailsPage: React.FC = () => {
  const router = useRouter()
  const { id } = useParams()

  // Simulação de dados do job
  const job = {
    id,
    title: 'Título do Job',
    description: 'Descrição detalhada do job.',
    price: 2500,
    date: '20 DEZ. 2024',
    imageUrl: '/placeholder-image.jpg', // Caminho para uma imagem de placeholder
  }

  const handleViewProposals = () => {
    router.push(`/jobs/${id}/propostas`)
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold text-blue-300">{job.title}</h1>
      {job.imageUrl ? (
        <Image
          src={job.imageUrl}
          alt={job.title}
          width={600}
          height={400}
          className="mb-4 rounded-lg object-cover"
        />
      ) : (
        <div className="mb-4 flex h-[400px] w-full items-center justify-center rounded-lg bg-gray-700">
          <p className="text-gray-400">Imagem não disponível</p>
        </div>
      )}
      <p className="mb-4 text-lg text-gray-300">{job.description}</p>
      <p className="mb-2 text-2xl font-bold text-green-400">{`R$ ${job.price.toFixed(2)}`}</p>
      <p className="mb-6 text-sm text-gray-400">{job.date}</p>

      <Button
        onClick={handleViewProposals}
        className="mt-6 rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors duration-200 hover:bg-blue-700"
      >
        Ver Propostas
      </Button>
    </div>
  )
}

export default JobDetailsPage
