import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z
    .string({ required_error: 'O E-mail é obrigatório' })
    .email('O E-mail precisa ser válido')
    .toLowerCase(),
  senha: z.string({ required_error: 'A Senha é obrigatória' }),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
