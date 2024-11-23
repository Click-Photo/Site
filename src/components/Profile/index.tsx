'use client'

import { useAuth } from '@/contexts/AuthContext'
import Image from 'next/image'
import { StarRating } from '../StarRating'
import { ClientOptions } from './ClientOptions'
import { PhotographerOptions } from './PhotographerOptions'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

interface User {
  id: string
  imageUrl: string
  name: string
  email: string
  telephone: string
  cep: string
  cpf: string
  amountJobs: number
}

export const defaultUser: User = {
  id: '1',
  imageUrl:
    'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg',
  name: 'Aline Fernandes',
  email: 'aline.fernandes@email.com',
  telephone: '11999999999',
  cep: '09990000',
  cpf: '12345678910',
  amountJobs: 20,
}
export function NavbarProfile() {
  const { id, role } = useAuth()

  return (
    <Sheet>
      <SheetTrigger>
        <FontAwesomeIcon icon={faUser} className="h-5 w-5 md:h-7 md:w-7" />
      </SheetTrigger>
      <SheetContent
        className="w-screen overflow-auto border-none bg-gray-dark-click font-secondary"
        side="left"
      >
        <SheetHeader className="flex gap-6 py-10">
          <Image
            src={defaultUser.imageUrl}
            width={1280}
            height={1280}
            alt="Imagem de Perfil"
            className="h-28 w-28 self-center rounded-2xl object-cover object-center"
          />
          <SheetTitle className="self-center text-white">
            {defaultUser.name}
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-6">
            <div className="flex items-center justify-evenly">
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

            {role === 'cliente' && (
              <ClientOptions
                name={defaultUser.name}
                email={defaultUser.email}
                telephone={defaultUser.telephone}
                cep={defaultUser.cep}
                cpf={defaultUser.cpf}
              />
            )}

            {role === 'fotografo' && (
              <PhotographerOptions
                name={defaultUser.name}
                email={defaultUser.email}
                telephone={defaultUser.telephone}
                cep={defaultUser.cep}
                cpf={defaultUser.cpf}
              />
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
