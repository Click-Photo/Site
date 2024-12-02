import { Role } from '@/@types/roleEnum'
import { UserData } from '@/@types/userData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function fetch(id: number, role: Role) {
  if (role === 'fotografo') {
    const { data } = await api.get(`/getEspecifFotografo/${id.toString()}`)

    return data
  } else if (role === 'cliente') {
    const { data } = await api.get(`/getEspecifCliente/${id.toString()}`)

    return data
  }
}

export function useUser(id: number, role: Role) {
  const query = useQuery<UserData, AxiosError>({
    queryKey: ['user', id],
    queryFn: async () => await fetch(id, role),
    retry: false,
    enabled: !!id,
  })

  return query
}
