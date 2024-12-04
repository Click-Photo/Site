import { api } from '@/lib/axios'

interface InterestPostData {
  idFotografo: number
}

export async function fetchPostInterestJob(id: number, body: InterestPostData) {
  const response = await api.post(`/marcarInteresse/${id.toString()}`, body)

  return response
}
