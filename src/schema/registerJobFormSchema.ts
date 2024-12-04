import { z } from 'zod'

export const registerJobFormSchema = z.object({
  dataJob: z.date({
    required_error: 'A data é obrigatória',
  }),
  titulo: z
    .string({ required_error: 'O título é obrigatório' })
    .min(5, 'O título deve possuir, no mínimo, 5 caracteres'),
  descricao: z
    .string({ required_error: 'A descrição é obrigatória' })
    .min(15, 'A descrição deve possuir, no mínimo, 15 caracteres')
    .max(110, 'A descrição deve possuir, no máximo, 110 caracteres'),
  local: z.string({ required_error: 'O Local é obrigatório' }),
  preco: z.coerce
    .number({ required_error: 'O valor é obrigatório' })
    .multipleOf(0.01, 'O valor deve possuir, no máximo, 2 casas decimais'),
})

export type RegisterJobFormSchema = z.infer<typeof registerJobFormSchema>
