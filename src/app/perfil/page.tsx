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
  address?: string
  contact?: string
  whatsapp?: string // Número de WhatsApp do usuário
  email?: string // E-mail do usuário
  portfolioPhotos?: string[]
  clientJobs?: string[]
}

const user: UserProfileProps = {
  name: 'Ana Fernandes',
  userType: 'fotografo',
  avatarUrl: 'https://example.com/avatar.jpg',
  address: 'Rua das Flores, 123',
  contact: '(11) 91234-5678',
  whatsapp: 'https://wa.me/5511912345678', // Link para o WhatsApp
  email: 'ana.fernandes@example.com', // E-mail do fotógrafo
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
  const [activeTab, setActiveTab] = useState<'info' | 'portfolio' | 'clientJobs' | 'contact'>('info')
  const [portfolioPhotos, setPortfolioPhotos] = useState(user.portfolioPhotos || [])

  const handleUploadPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newPhotoUrl = URL.createObjectURL(event.target.files[0])
      setPortfolioPhotos((prevPhotos) => [...prevPhotos, newPhotoUrl])
    }
  }

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
      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => setActiveTab('contact')}
          className={`mr-4 ${activeTab === 'contact' ? 'font-bold' : ''}`}
        >
          Contato
        </button>
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
        {activeTab === 'contact' && (
          <div>
            <h2 className="text-lg font-semibold">Contato</h2>
            <p>
              WhatsApp: <a href={user.whatsapp} target="_blank" rel="noopener noreferrer" className="text-blue-500">Converse no WhatsApp</a>
            </p>
            <p>Email: <a href={`mailto:${user.email}`} className="text-blue-500">{user.email}</a></p>
          </div>
        )}

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
              {portfolioPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Portfolio ${index + 1}`}
                  className="h-auto w-full"
                />
              ))}
            </div>
            <div className="mt-4">
              <input type="file" onChange={handleUploadPhoto} />
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
