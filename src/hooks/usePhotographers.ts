import { PhotographerData } from '@/@types/photographersData'
import { Role } from '@/@types/roleEnum'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function fetch(role: Role) {
  if (role === 'fotografo') return null

  const { data } = await api.get(`/visualizarFotografos`)

  return data
}

export function usePhotographers(role: Role) {
  const query = useQuery<PhotographerData[], AxiosError>({
    queryKey: ['photographersList'],
    queryFn: async () => await fetch(role),
    retry: false,
  })

  return query
}
