import { AuthData } from '@/@types/authData'
import { api } from '@/lib/axios'
import { LoginFormSchema } from '@/schema/loginFormSchema'

export async function fetchAuthentication(body: LoginFormSchema) {
  const { data } = await api.post<AuthData>('/loginUsuario', body)

  return data
}
