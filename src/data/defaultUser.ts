'use client'

import { AuthContextType, useAuth } from '@/contexts/AuthContext'

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

export function useDefaultUser() {
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

  return defaultUser
}
