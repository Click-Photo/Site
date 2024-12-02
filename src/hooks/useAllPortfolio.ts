import { PortfolioData } from '@/@types/portfolioData'
import { Role } from '@/@types/roleEnum'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function fetch(role: Role) {
  if (role === 'fotografo') return null

  const { data } = await api.get(`/listarTodasFotos`)

  return data
}

export function useAllPortfolio(role: Role) {
  const query = useQuery<PortfolioData[], AxiosError>({
    queryKey: ['portfolioList'],
    queryFn: async () => await fetch(role),
    retry: false,
    enabled: role === 'cliente' || role === 'admin',
  })

  return query
}
