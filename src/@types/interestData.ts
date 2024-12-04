import { Status } from './statusEnum'

export interface InterestData {
  interesseId: number
  id: number
  idCliente: number
  idFotografo: number | null
  dataJob: Date
  titulo: string
  descricao: string
  local: string
  status: Status
  preco: string
}
