'use client'

import { NavbarUser } from '@/components/NavbarUser'
import { ClientOptions } from '@/components/Profile/ClientOptions'
import { PhotographerOptions } from '@/components/Profile/PhotographerOptions'
import { StarRating } from '@/components/StarRating'
import { useDefaultUser } from '@/data/defaultUser'
import Image from 'next/image'

export default function Profile() {
  const { name, imageUrl, amountJobs, role, email, telephone, cep, cpf } =
    useDefaultUser()

  return (
    <>
      <NavbarUser name={name} />
      <section className="w-screen px-6 py-9">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8">
          <div className="flex flex-col gap-4">
            <Image
              src={imageUrl}
              width={1280}
              height={1280}
              alt="Imagem de Perfil"
              className="h-28 w-28 self-center rounded-2xl object-cover object-center"
            />
            <h1 className="self-center text-white">{name}</h1>
          </div>

          <div className="flex w-full max-w-96 items-center justify-evenly">
            <div className="flex w-full flex-col items-center gap-1 font-secondary text-white sm:w-28">
              <span className="text-xl font-bold">{amountJobs}</span>
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
              name={name}
              email={email}
              telephone={telephone}
              cep={cep}
              cpf={cpf}
            />
          )}

          {role === 'cliente' && (
            <ClientOptions
              name={name}
              email={email}
              telephone={telephone}
              cep={cep}
              cpf={cpf}
            />
          )}
        </div>
      </section>
    </>
  )
}
