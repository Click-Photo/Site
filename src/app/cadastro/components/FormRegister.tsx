'use client'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Field } from '@/components/Field'
import { Form, FormField, FormControl, FormMessage } from '@/components/ui/form'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faIdCard,
  faLocationDot,
  faLock,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  registerFormSchema,
  RegisterFormSchema,
} from '@/schema/registerFormSchema'

export function FormRegister() {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form

  function handleLoginData(data: RegisterFormSchema) {
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <Form {...form}>
      <form
        className="mt-4 flex w-full max-w-80 flex-col gap-8"
        onSubmit={handleSubmit(handleLoginData)}
      >
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <Field>
              <FormControl>
                <Input
                  variant="icon"
                  icon={<FontAwesomeIcon icon={faUser} className="text-lg" />}
                  placeholder="E-mail"
                  type="text"
                  {...field}
                />
              </FormControl>
              {errors.email && (
                <FormMessage>{errors.email.message}</FormMessage>
              )}
            </Field>
          )}
        />
        <FormField
          control={control}
          name="cpf"
          render={({ field }) => (
            <Field>
              <FormControl>
                <Input
                  variant="icon"
                  icon={<FontAwesomeIcon icon={faIdCard} className="text-lg" />}
                  placeholder="CPF"
                  type="text"
                  {...field}
                />
              </FormControl>
              {errors.cpf && <FormMessage>{errors.cpf.message}</FormMessage>}
            </Field>
          )}
        />
        <FormField
          control={control}
          name="telephone"
          render={({ field }) => (
            <Field>
              <FormControl>
                <Input
                  variant="icon"
                  icon={<FontAwesomeIcon icon={faPhone} className="text-lg" />}
                  placeholder="Telefone"
                  type="text"
                  {...field}
                />
              </FormControl>
              {errors.telephone && (
                <FormMessage>{errors.telephone.message}</FormMessage>
              )}
            </Field>
          )}
        />
        <FormField
          control={control}
          name="cep"
          render={({ field }) => (
            <Field>
              <FormControl>
                <Input
                  variant="icon"
                  icon={
                    <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
                  }
                  placeholder="CEP"
                  type="text"
                  {...field}
                />
              </FormControl>
              {errors.cep && <FormMessage>{errors.cep.message}</FormMessage>}
            </Field>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <Field>
              <FormControl>
                <Input
                  variant="icon"
                  icon={<FontAwesomeIcon icon={faLock} className="text-lg" />}
                  placeholder="Senha"
                  type="password"
                  {...field}
                />
              </FormControl>
              {errors.password && (
                <FormMessage>{errors.password.message}</FormMessage>
              )}
            </Field>
          )}
        />
        <a
          className="self-end text-base text-gray-light-click underline underline-offset-2 transition-all hover:text-white hover:underline-offset-4"
          href="/"
        >
          Já possui cadastro?
        </a>
        <Button>
          <span>cadastre-se</span>
        </Button>
      </form>
    </Form>
  )
}
