'use client'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Field } from '@/components/Field'
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { MessageError } from '@/components/MessageError'
import { Loading } from '@/components/Loading'
import { useState } from 'react'
import { fetchPostUser } from '@/hooks/usePostUser'
import { useRouter } from 'next/navigation'
import { AxiosError } from 'axios'

export function FormRegister() {
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState<string | undefined>(
    undefined,
  )

  const router = useRouter()

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form

  async function useHandleRegisterData(body: RegisterFormSchema) {
    setIsLoading(true)
    setMessageError(undefined)

    await fetchPostUser(body)
      .then((response) => {
        if (response.status === 201) {
          router.push('/login')
        }
      })
      .catch((error: AxiosError) => {
        setMessageError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      {isLoading && <Loading />}
      {messageError && <MessageError message={messageError} />}
      <Form {...form}>
        <form
          className="mt-4 flex w-full max-w-80 flex-col gap-8"
          onSubmit={handleSubmit(useHandleRegisterData)}
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
            name="nome"
            render={({ field }) => (
              <Field>
                <FormControl>
                  <Input
                    variant="icon"
                    icon={<FontAwesomeIcon icon={faUser} className="text-lg" />}
                    placeholder="Nome Completo"
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
            name="CPF"
            render={({ field }) => (
              <Field>
                <FormControl>
                  <Input
                    variant="icon"
                    icon={
                      <FontAwesomeIcon icon={faIdCard} className="text-lg" />
                    }
                    placeholder="CPF"
                    type="text"
                    {...field}
                  />
                </FormControl>
                {errors.CPF && <FormMessage>{errors.CPF.message}</FormMessage>}
              </Field>
            )}
          />
          <FormField
            control={control}
            name="telefone"
            render={({ field }) => (
              <Field>
                <FormControl>
                  <Input
                    variant="icon"
                    icon={
                      <FontAwesomeIcon icon={faPhone} className="text-lg" />
                    }
                    placeholder="Telefone"
                    type="text"
                    {...field}
                  />
                </FormControl>
                {errors.telefone && (
                  <FormMessage>{errors.telefone.message}</FormMessage>
                )}
              </Field>
            )}
          />
          <FormField
            control={control}
            name="CEP"
            render={({ field }) => (
              <Field>
                <FormControl>
                  <Input
                    variant="icon"
                    icon={
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-lg"
                      />
                    }
                    placeholder="CEP"
                    type="text"
                    {...field}
                  />
                </FormControl>
                {errors.CEP && <FormMessage>{errors.CEP.message}</FormMessage>}
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
          <p>Quero me cadastrar como:</p>
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-1 justify-between"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="fotografo" />
                      </FormControl>
                      <FormLabel className="font-normal">Fotografo</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="cliente" />
                      </FormControl>
                      <FormLabel className="font-normal">Cliente</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                {errors.role && (
                  <FormMessage>{errors.role.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
          {errors.role === <FormMessage>{errors.role?.message}</FormMessage>}
          <a
            className="self-end text-base text-gray-light-click underline underline-offset-2 transition-all hover:text-white hover:underline-offset-4"
            href="/"
          >
            Já possui cadastro?
          </a>
          <Button type="submit">
            <span>cadastre-se</span>
          </Button>
        </form>
      </Form>
    </>
  )
}
