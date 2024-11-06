'use client'
import React, { useState } from 'react'
import UserProfile from './components/UserProfile'

interface UserProfileProps {
  name: string
  userType: 'cliente' | 'fotografo'
  avatarUrl: string
  jobsCompleted?: number
  rating?: number
  bookedJobs?: number
  address?: string // Endereço do usuário
  contact?: string // Contato do usuário
  portfolioPhotos?: string[] // Fotos do portfólio do fotógrafo
  clientJobs?: string[] // Trabalhos do cliente
}

// Dados de exemplo para o usuário
const user: UserProfileProps = {
  name: 'Ana Fernandes',
  userType: 'fotografo', // ou 'cliente'
  avatarUrl: 'https://example.com/avatar.jpg',
  address: 'Rua das Flores, 123',
  contact: '(11) 91234-5678',
  portfolioPhotos: [
    'https://example.com/photo1.jpg',
    'https://example.com/photo2.jpg',
    'https://example.com/photo3.jpg',
  ],
  clientJobs: [
    'Trabalho 1: Sessão de fotos de família',
    'Trabalho 2: Fotos de aniversário',
  ],
}

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'info' | 'portfolio' | 'clientJobs'
  >('info')

  return (
    <main className="p-6">
      <UserProfile
        name={user.name}
        userType={user.userType}
        avatarUrl={user.avatarUrl}
        address={user.address}
        contact={user.contact}
      />

      {/* Abas de navegação */}
      <div className="mt-4">
        <button
          onClick={() => setActiveTab('info')}
          className={`mr-4 ${activeTab === 'info' ? 'font-bold' : ''}`}
        >
          Informações
        </button>
        {user.userType === 'fotografo' && (
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`mr-4 ${activeTab === 'portfolio' ? 'font-bold' : ''}`}
          >
            Portfólio
          </button>
        )}
        {user.userType === 'cliente' && (
          <button
            onClick={() => setActiveTab('clientJobs')}
            className={`mr-4 ${activeTab === 'clientJobs' ? 'font-bold' : ''}`}
          >
            Trabalhos
          </button>
        )}
      </div>

      {/* Conteúdo das Abas */}
      <div className="mt-4">
        {activeTab === 'info' && (
          <div>
            <p>Endereço: {user.address}</p>
            <p>Contato: {user.contact}</p>
          </div>
        )}

        {user.userType === 'fotografo' && activeTab === 'portfolio' && (
          <div>
            <h2>Portfólio</h2>
            <div className="grid grid-cols-2 gap-4">
              {user.portfolioPhotos?.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Portfolio ${index + 1}`}
                  className="h-auto w-full"
                />
              ))}
            </div>
          </div>
        )}

        {user.userType === 'cliente' && activeTab === 'clientJobs' && (
          <div>
            <h2>Meus Trabalhos</h2>
            <ul>
              {user.clientJobs?.map((job, index) => <li key={index}>{job}</li>)}
            </ul>
          </div>
        )}
      </div>
    </main>
  )
}

export default ProfilePage
