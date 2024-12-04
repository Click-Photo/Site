import { api } from '@/lib/axios'
import { RegisterProporsalFormSchema } from '@/schema/registerProporsalFormSchema'

interface ProporsalPostData extends RegisterProporsalFormSchema {
  idFotografo: number
}

export async function fetchPostProporsalJob(
  id: number,
  body: ProporsalPostData,
) {
  const response = await api.post(`/criarProposta/${id.toString()}`, body)

  return response
}
