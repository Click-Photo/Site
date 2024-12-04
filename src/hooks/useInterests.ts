import { InterestData } from '@/@types/interestData'
import { Role } from '@/@types/roleEnum'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function fetch(id: number) {
  const { data } = await api.get(`/getInteressesFotografo/${id.toString()}`)

  return data
}

export function useInterests(id: number, role: Role) {
  const query = useQuery<InterestData[], AxiosError>({
    queryKey: ['interests', id],
    queryFn: async () => await fetch(id),
    retry: false,
    enabled: role === 'admin' || role === 'fotografo',
  })

  return query
}
