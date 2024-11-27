'use client'

import { NavbarUser } from '@/components/NavbarUser'
import { ClientOptions } from '@/components/Profile/ClientOptions'
import { PhotographerOptions } from '@/components/Profile/PhotographerOptions'
import { StarRating } from '@/components/StarRating'
import { AuthContextType, useAuth } from '@/contexts/AuthContext'
import Image from 'next/image'

interface User extends AuthContextType {
  imageUrl: string
  name: string
  email: string
  telephone: string
  cep: string
  cpf: string
  amountJobs: number
  scoreRating: number
}

export default function Profile() {
  const { role } = useAuth()

  const defaultUser: User = {
    id: '1',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg',
    name: 'Aline Fernandes',
    email: 'aline.fernandes@email.com',
    telephone: '11999999999',
    cep: '09990000',
    cpf: '12345678910',
    amountJobs: 20,
    scoreRating: 4.5,
    role,
  }

  return (
    <>
      <NavbarUser name={defaultUser.name} />
      <section className="w-screen px-6 py-9">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8">
          <div className="flex flex-col gap-4">
            <Image
              src={defaultUser.imageUrl}
              width={1280}
              height={1280}
              alt="Imagem de Perfil"
              className="h-28 w-28 self-center rounded-2xl object-cover object-center"
            />
            <h1 className="self-center text-white">{defaultUser.name}</h1>
          </div>

          <div className="flex w-full max-w-96 items-center justify-evenly">
            <div className="flex w-full flex-col items-center gap-1 font-secondary text-white sm:w-28">
              <span className="text-xl font-bold">
                {defaultUser.amountJobs}
              </span>
              <p className="text-sm">Jobs</p>
            </div>
            <div className="h-16 w-[1px] bg-white" />
            <div className="flex w-full flex-col items-center gap-1 text-[#F8B84E] sm:w-28">
              <span className="font-secondary">({32})</span>
              <StarRating score={4.5} />
            </div>
          </div>

          {role === 'fotografo' && (
            <PhotographerOptions
              name={defaultUser.name}
              email={defaultUser.email}
              telephone={defaultUser.telephone}
              cep={defaultUser.cep}
              cpf={defaultUser.cpf}
            />
          )}

          {role === 'cliente' && (
            <ClientOptions
              name={defaultUser.name}
              email={defaultUser.email}
              telephone={defaultUser.telephone}
              cep={defaultUser.cep}
              cpf={defaultUser.cpf}
            />
          )}
        </div>
      </section>
    </>
  )
}
