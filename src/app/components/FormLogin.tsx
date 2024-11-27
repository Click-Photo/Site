'use client'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Field } from '@/components/Field'
import { Form, FormField, FormControl, FormMessage } from '@/components/ui/form'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormSchema, loginFormSchema } from '@/schema/loginFormSchema'
import Link from 'next/link'

export function FormLogin() {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form

  function handleLoginData(data: LoginFormSchema) {
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
          href="esqueceu-a-senha"
        >
          Esqueceu a senha?
        </a>
        <Button>
          <span>login</span>
        </Button>
        <Button asChild variantColor="secondary">
          <Link href="cadastro">cadastre-se</Link>
        </Button>
      </form>
    </Form>
  )
}
