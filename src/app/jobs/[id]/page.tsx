'use client' 
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
      'https://cdn.builder.io/api/v1/image/assets/TEMP/f9725cf3c1b411b2e759ff00d7d9327a41bb1142ce7189b7d1f9b68529563a93?placeholderIfAbsent=true&apiKey=04921d589e6d467aaf5d72b4f1f97f44',
  }

  return (
    <div className="p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <img src={job.imageUrl} alt={job.title} className="rounded-lg mb-4" />
      <p className="text-lg">{job.description}</p>
      <p className="text-2xl font-bold">R$ {job.price.toFixed(2)}</p>
      <p className="text-sm text-gray-400">{job.date}</p>
    </div>
  )
}

export default JobDetailsPage
