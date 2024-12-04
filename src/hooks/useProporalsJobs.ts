import { ProporsalData } from '@/@types/proporsalData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function fetch(id: number) {
  const { data } = await api.get(`/getPropostaJob/${id.toString()}`)

  return data
}

export function useProporsalsJob(id: number) {
  const query = useQuery<ProporsalData[], AxiosError>({
    queryKey: ['propostasJob', id],
    queryFn: async () => await fetch(id),
    retry: false,
  })

  return query
}
