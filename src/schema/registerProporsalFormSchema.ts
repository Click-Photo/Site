import { z } from 'zod'

export const registerProporsalFormSchema = z.object({
  valorProposta: z.coerce
    .number({ required_error: 'O valor é obrigatório' })
    .multipleOf(0.01, 'O valor deve possuir, no máximo, 2 casas decimais'),
})

export type RegisterProporsalFormSchema = z.infer<
  typeof registerProporsalFormSchema
>
