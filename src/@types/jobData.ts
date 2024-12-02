export interface JobData {
  id: number
  idCliente: number
  idFotografo: number
  dataJob: Date
  titulo: string
  descricao: string
  local: string
  status: 'Aceito' | 'Finalizado' | 'Pendente'
  preco: number
}
