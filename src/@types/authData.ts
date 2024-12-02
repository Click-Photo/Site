import { Role } from './roleEnum'

interface AuthMessage {
  auth: boolean
  message: string
  role?: Role
  token: string
}

export interface AuthData {
  message: AuthMessage
}
