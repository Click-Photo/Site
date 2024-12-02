import { Role } from '@/@types/roleEnum'
import { api } from '@/lib/axios'
import { UpdateProfileFormSchema } from '@/schema/updateProfileFormSchema'

interface UpdateUserData {
  message: string
}

export async function fetchUpdateUser(
  body: UpdateProfileFormSchema,
  id: number,
  role: Role,
) {
  if (role === 'fotografo') {
    const response = await api.post<UpdateUserData>(
      `/alterarFotografo/${id.toString()}`,
      body,
    )

    return response
  } else if (role === 'cliente') {
    const response = await api.post<UpdateUserData>(
      `/alterarCliente/${id.toString()}`,
      body,
    )

    return response
  }
}
