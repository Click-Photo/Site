import { Role } from '@/@types/roleEnum'
import { UserData } from '@/@types/userData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function fetch(id: number, role: Role) {
  if (role === 'cliente') return null

  const { data } = await api.get(`/getEspecifCliente/${id.toString()}`)

  return data
}

export function usePhotographer(id: number, role: Role) {
  const query = useQuery<UserData, AxiosError>({
    queryKey: ['cliente', id],
    queryFn: async () => await fetch(id, role),
    retry: false,
    enabled: role === 'admin' || role === 'fotografo',
  })

  return query
}
