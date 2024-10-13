import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z
    .string({ required_error: 'O E-mail é obrigatório' })
    .email('O E-mail precisa ser válido')
    .toLowerCase(),
  password: z
    .string({ required_error: 'A Senha é obrigatória' })
    .min(8, 'A Senha deve conter ao menos 8 caracteres'),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
