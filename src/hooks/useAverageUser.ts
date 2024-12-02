import { AverageData } from '@/@types/averageData'
import { Role } from '@/@types/roleEnum'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function fetch(id: number, role: Role) {
  if (role === 'fotografo') {
    const { data } = await api.get(`/mediaAvaliacoesFotografo/${id.toString()}`)

    return data
  } else if (role === 'cliente') {
    const { data } = await api.get(`/mediaAvaliacoesCliente/${id.toString()}`)

    return data
  }
}

export function useAverageUser(id: number, role: Role) {
  const query = useQuery<AverageData, AxiosError>({
    queryKey: ['userAverageRating', id],
    queryFn: async () => await fetch(id, role),
    retry: false,
    enabled: !!id,
  })

  return query
}
