import { AverageData } from '@/@types/averageData'
import { Role } from '@/@types/roleEnum'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function fetch(id: number, role: Role) {
  if (role === 'fotografo') return null

  const { data } = await api.get(`/mediaAvaliacoesFotografo/${id.toString()}`)

  return data
}

export function useAveragePhotographer(id: number, role: Role) {
  const query = useQuery<AverageData, AxiosError>({
    queryKey: ['photographerAverageRating', id],
    queryFn: async () => await fetch(id, role),
    enabled: role === 'admin' || role === 'cliente',
    retry: false,
  })

  return query
}
