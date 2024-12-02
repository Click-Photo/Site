import { Role } from './roleEnum'

export interface UserData {
  id: number
  email: string
  telefone: string
  nome: string
  role: Role
  CEP: string
  CPF: string
}
