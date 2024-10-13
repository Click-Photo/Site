import { z } from 'zod'

export const registerFormSchema = z.object({
  email: z
    .string({ required_error: 'O E-mail é obrigatório' })
    .email('O E-mail precisa ser válido')
    .toLowerCase(),
  cpf: z
    .string({ required_error: 'O CPF é obrigatório' })
    .min(11, 'O CPF deve ter 11 números, sem caracteres especiais')
    .max(11, 'O CPF deve ter 11 números, sem caracteres especiais'),
  telephone: z
    .string({ required_error: 'O Telefone é obrigatório' })
    .min(10, 'O Telefone deve ter 10 números, sem caracteres especiais')
    .max(10, 'O Telefone deve ter 10 números, sem caracteres especiais'),
  cep: z
    .string({ required_error: 'O CEP é obrigatório' })
    .min(10, 'O CEP deve ter 8 números, sem caracteres especiais')
    .max(10, 'O CEP deve ter 8 números, sem caracteres especiais'),
  password: z
    .string({ required_error: 'A Senha é obrigatória' })
    .min(8, 'A Senha deve conter ao menos 8 caracteres'),
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
