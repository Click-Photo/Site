import { z } from 'zod'

export const updateProfileFormSchema = z.object({
  name: z.string({ required_error: 'O Nome é obrigatório' }),
  email: z
    .string({ required_error: 'O E-mail é obrigatório' })
    .email('O E-mail precisa ser válido')
    .toLowerCase(),
  telephone: z
    .string({ required_error: 'O Telefone é obrigatório' })
    .min(11, 'O Telefone deve possuir 11 caracteres')
    .max(11, 'O Telefone deve possuir 11 caracteres'),
  cep: z
    .string({ required_error: 'O CEP é obrigatório' })
    .min(8, 'O CEP deve possuir 8 caracteres')
    .max(8, 'O CEP deve possuir 8 caracteres'),
})

export type UpdateProfileFormSchema = z.infer<typeof updateProfileFormSchema>
