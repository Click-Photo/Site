'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const JobDetailsPage: React.FC = () => {
  const { id } = useParams()
  const job = {
    id,
    title: 'Título do Job',
    description: 'Descrição detalhada do job.',
    price: 2500,
    date: '20 DEZ. 2024',
    imageUrl:
      '',
  }

  return (
    <div className="bg-gray-900 p-8 text-white">
      <h1 className="mb-4 text-3xl font-bold">{job.title}</h1>
      <Image src={job.imageUrl} alt={job.title} className="mb-4 rounded-lg" />
      <p className="text-lg">{job.description}</p>
      <p className="text-2xl font-bold">R$ {job.price.toFixed(2)}</p>
      <p className="text-sm text-gray-400">{job.date}</p>
    </div>
  )
}

export default JobDetailsPage
