import { z } from 'zod'

export const registerFormSchema = z.object({
  email: z
    .string({ required_error: 'O E-mail é obrigatório' })
    .email('O E-mail precisa ser válido')
    .toLowerCase(),
  nome: z
    .string({ required_error: 'O Nome é obrigatório' })
    .min(3, 'O Nome deve possuir, no mínimo, 3 caracteres'),
  CPF: z
    .string({ required_error: 'O CPF é obrigatório' })
    .min(11, 'O CPF deve ter 11 números, sem caracteres especiais')
    .max(11, 'O CPF deve ter 11 números, sem caracteres especiais'),
  telefone: z
    .string({ required_error: 'O Telefone é obrigatório' })
    .min(11, 'O Telefone deve ter 11 números, sem caracteres especiais')
    .max(11, 'O Telefone deve ter 11 números, sem caracteres especiais'),
  CEP: z
    .string({ required_error: 'O CEP é obrigatório' })
    .min(8, 'O CEP deve ter 8 números, sem caracteres especiais')
    .max(8, 'O CEP deve ter 8 números, sem caracteres especiais'),
  senha: z
    .string({ required_error: 'A Senha é obrigatória' })
    .min(6, 'A Senha deve conter ao menos 6 caracteres'),
  role: z.string({ required_error: 'Selecione uma opção' }),
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
