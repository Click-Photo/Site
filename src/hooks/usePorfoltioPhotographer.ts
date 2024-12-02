import { PortfolioData } from '@/@types/portfolioData'
import { Role } from '@/@types/roleEnum'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function fetch(id: number, role: Role) {
  if (role === 'cliente') return null

  const { data } = await api.get(`/listarFotosFotografo/${id.toString()}`)

  return data
}

export function usePorfolioPhotographer(id: number, role: Role) {
  console.log()

  const query = useQuery<PortfolioData[], AxiosError>({
    queryKey: ['photographerPortfolio', id],
    queryFn: async () => await fetch(id, role),
    retry: false,
    enabled: role === 'fotografo' || role === 'admin',
  })

  return query
}
