import { Role } from './roleEnum'

interface AuthMessage {
  auth: boolean
  message: string
  role?: Role
}

export interface AuthData {
  message: AuthMessage
}
