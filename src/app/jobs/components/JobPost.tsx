import Image from 'next/image'
import React from 'react'

interface JobPostProps {
  id: string
  title: string
  description: string
  price: number
  date: string
  onViewDetails: (id: string) => void
}

const JobPost: React.FC<JobPostProps> = ({
  id,
  title,
  description,
  price,
  date,
  onViewDetails,
}) => {
  return (
    <div className="transform rounded-lg bg-white p-6 text-black shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-black-click">{description}</p>
      <p className="font-bold text-green-400">{`R$${price}`}</p>
      <p className="text-sm text-black-click">{date}</p>
      <button
        onClick={() => onViewDetails(id)}
        className="mt-4 rounded-lg bg-neutral-900 px-4 py-2 text-white hover:bg-blue-500"
      >
        Ver Detalhes
      </button>
    </div>
  )
}

export default JobPost
