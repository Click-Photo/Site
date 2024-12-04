import { api } from '@/lib/axios'

interface InterestPostData {
  idCliente: number
  dataJob: string
  titulo: string
  descricao: string
  local: string
  preco: number
}

export async function fetchPostJob(body: InterestPostData) {
  const response = await api.post(`/criarJob`, {
    idCliente: body.idCliente,
    dataJob: body.dataJob,
    titulo: body.titulo,
    descricao: body.descricao,
    local: body.local,
    preco: body.preco,
  })

  return response
}
