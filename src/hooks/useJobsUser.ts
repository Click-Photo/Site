import { Role } from '@/@types/roleEnum'
import { UserJobsData } from '@/@types/userJobsData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function fetch(id: number, role: Role) {
  if (role === 'fotografo') {
    const { data } = await api.get(`/getJobsFotografo/${id.toString()}`)

    return data
  } else if (role === 'cliente') {
    const { data } = await api.get(`/getAllJobsCliente/${id.toString()}`)

    return data
  }
}

export function useJobsUser(id: number, role: Role) {
  const query = useQuery<UserJobsData, AxiosError>({
    queryKey: ['jobsUser', id],
    queryFn: async () => await fetch(id, role),
    retry: false,
    enabled: !!id,
  })

  return query
}
