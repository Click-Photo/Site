import { api } from '@/lib/axios'
import { RegisterFormSchema } from '@/schema/registerFormSchema'

interface UserPostData extends RegisterFormSchema {}

export async function fetchPostUser(body: UserPostData) {
  const response = await api.post(`/criarUsuario`, {
    email: body.email,
    nome: body.nome,
    telefone: body.telefone,
    CPF: body.CPF,
    CEP: body.CEP,
    senha: body.senha,
    role: body.role,
  })

  return response
}
