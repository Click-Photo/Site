import { PortfolioData } from '@/@types/portfolioData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function fetch(id: number) {
  const { data } = await api.get(`/listarFotosFotografo/${id.toString()}`)

  return data
}

export function usePorfolioPhotographer(id: number) {
  console.log()

  const query = useQuery<PortfolioData[], AxiosError>({
    queryKey: ['photographerPortfolio', id],
    queryFn: async () => await fetch(id),
    retry: false,
  })

  return query
}
