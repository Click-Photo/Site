import { JobData } from '@/@types/jobData'
import { Role } from '@/@types/roleEnum'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function fetch(role: Role) {
  if (role === 'cliente') return null

  const { data } = await api.get(`/visualizarJobs`)

  return data
}

export function useAllJobs(role: Role) {
  const query = useQuery<JobData[], AxiosError>({
    queryKey: ['jobsList'],
    queryFn: async () => await fetch(role),
    retry: false,
    enabled: role === 'admin' || role === 'fotografo',
  })

  return query
}
