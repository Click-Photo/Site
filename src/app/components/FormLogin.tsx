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
import { fetchAuthentication } from '@/hooks/useAuthenticate'
import { useContext, useState } from 'react'
import { MessageError } from '@/components/MessageError'
import { Loading } from '@/components/Loading'

import { jwtDecode } from 'jwt-decode'
import { AuthContext } from '@/contexts/AuthContext'
import { UserToken } from '@/@types/UserToken'
import { useRouter } from 'next/navigation'

export function FormLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState<string | undefined>(
    undefined,
  )

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form

  const { createToken, createUser } = useContext(AuthContext)

  const router = useRouter()

  async function useHandleLoginData(body: LoginFormSchema) {
    setIsLoading(true)
    setMessageError(undefined)

    await fetchAuthentication(body)
      .then(({ message }) => {
        if (message.auth === false) {
          setMessageError(message.message)
        } else {
          const userDecoded = jwtDecode<UserToken>(message.token)

          createUser(userDecoded)
          createToken(message.token)

          if (userDecoded.role === 'admin') {
            router.push('/admin')
          } else if (userDecoded.role === 'cliente') {
            router.push('/feed')
          } else {
            router.push('/jobs')
          }
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      {messageError && <MessageError message={messageError} />}
      {isLoading && <Loading />}
      <Form {...form}>
        <form
          className="mt-4 flex w-full max-w-80 flex-col gap-8"
          onSubmit={handleSubmit(useHandleLoginData)}
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
            name="senha"
            render={({ field }) => (
              <Field>
                <FormControl>
                  <Input
                    variant="icon"
                    className="pr-10 md:pr-14"
                    icon={<FontAwesomeIcon icon={faLock} className="text-lg" />}
                    placeholder="Senha"
                    type="password"
                    {...field}
                  />
                </FormControl>
                {errors.senha && (
                  <FormMessage>{errors.senha.message}</FormMessage>
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
          <Button type="submit">
            <span>login</span>
          </Button>
          <Button asChild variantColor="secondary">
            <Link href="cadastro">cadastre-se</Link>
          </Button>
        </form>
      </Form>
    </>
  )
}
