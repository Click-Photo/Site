// src/app/jobs/create/page.tsx
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'

const CreateJobPage: React.FC = () => {
  const router = useRouter()

  // Estados para os campos do formulário
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [budget, setBudget] = useState('')

  const handleCreateJob = () => {
    // Aqui você pode adicionar a lógica de criação do job, como uma chamada de API
    const newJob = {
      title,
      description,
      category,
      location,
      date,
      budget,
    }

    console.log('Job criado:', newJob)

    // Após a criação do job, redireciona para a página de jobs
    router.push('/jobs')
  }

  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="mb-6 text-3xl font-bold">Criar Novo Job</h1>
      <form
        className="w-full max-w-lg space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Título do Job
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Digite o título do job"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Descrição
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Descreva os detalhes do job"
            rows={4}
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Categoria
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Selecione uma categoria</option>
            <option value="Casamento">Casamento</option>
            <option value="Retrato">Retrato</option>
            <option value="Evento">Evento</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Localização
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Digite a localização"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Data e Hora
          </label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Orçamento
          </label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Digite o orçamento"
          />
        </div>
        <Button onClick={handleCreateJob} className="mt-4 w-full">
          Publicar Job
        </Button>
      </form>
    </main>
  )
}

export default CreateJobPage
