import { Role } from '@/@types/roleEnum'
import { UserData } from '@/@types/userData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function fetch(id: number, role: Role) {
  if (role === 'fotografo') return null

  const { data } = await api.get(`/getEspecifFotografo/${id.toString()}`)

  return data
}

export function usePhotographer(id: number, role: Role) {
  const query = useQuery<UserData, AxiosError>({
    queryKey: ['photographer', id],
    queryFn: async () => await fetch(id, role),
    retry: false,
    enabled: role === 'admin' || role === 'cliente',
  })

  return query
}
