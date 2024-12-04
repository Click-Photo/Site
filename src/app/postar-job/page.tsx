'use client'

import { AuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { NavbarUser } from '@/components/NavbarUser'
import { Form, FormControl, FormField, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import {
  registerJobFormSchema,
  RegisterJobFormSchema,
} from '@/schema/registerJobFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Field } from '@/components/Field'
import { Input } from '@/components/Input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button as ButtonUI } from '@/components/ui/button'
import { Button } from '@/components/Button'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { formatDate } from '@/utils/format-date'
import { fetchPostJob } from '@/hooks/usePostJob'
import { AxiosError } from 'axios'
import { MessageError } from '@/components/MessageError'
import { Loading } from '@/components/Loading'

export default function PostJob() {
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState<string | undefined>(
    undefined,
  )

  const form = useForm<RegisterJobFormSchema>({
    resolver: zodResolver(registerJobFormSchema),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form

  const { token, user } = useContext(AuthContext)

  const router = useRouter()

  if (!user || !token) {
    return router.push('/login')
  }

  if (user.role === 'admin') {
    return router.push('/admin')
  }

  async function useHandleRegisterJob({
    dataJob,
    titulo,
    descricao,
    local,
    preco,
  }: RegisterJobFormSchema) {
    const jobDate = `${dataJob.getUTCFullYear()}-${dataJob.getMonth() + 1}-${dataJob.getUTCDate()}`

    setIsLoading(true)
    setMessageError(undefined)

    await fetchPostJob({
      idCliente: user!.id,
      dataJob: jobDate,
      titulo,
      descricao,
      local,
      preco,
    })
      .then((response) => {
        if (response.status === 201) {
          router.push('/meus-jobs')
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
      <NavbarUser />
      <section className="flex min-h-[calc(100vh-96px)] flex-col items-center justify-center gap-12 px-9 py-12 md:px-6">
        <h1 className="text-2xl font-bold uppercase">Postar Novo Job</h1>
        <Form {...form}>
          <form
            className="flex w-full max-w-3xl flex-col items-center justify-center gap-6"
            onSubmit={handleSubmit(useHandleRegisterJob)}
          >
            <div className="flex w-full flex-col gap-6 md:flex-row">
              <FormField
                control={control}
                name="dataJob"
                render={({ field }) => (
                  <Field className="w-full">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <ButtonUI className="h-max w-full justify-start gap-4 bg-gray-dark-click px-4 py-4 text-base text-gray-light-click/50 hover:text-white focus:text-white">
                            {field.value ? (
                              formatDate(field.value)
                            ) : (
                              <span>Selecione uma data</span>
                            )}
                          </ButtonUI>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.dataJob && (
                      <FormMessage>{errors.dataJob.message}</FormMessage>
                    )}
                  </Field>
                )}
              />
              <FormField
                control={control}
                name="titulo"
                render={({ field }) => (
                  <Field className="w-full">
                    <Input
                      type="text"
                      placeholder="Título"
                      className="rounded-md"
                      {...field}
                    />
                    {errors.titulo && (
                      <FormMessage>{errors.titulo.message}</FormMessage>
                    )}
                  </Field>
                )}
              />
            </div>
            <FormField
              control={control}
              name="descricao"
              render={({ field }) => (
                <Field className="w-full">
                  <Textarea
                    placeholder="Descrição"
                    className="border-0 border-none bg-gray-dark-click p-4 text-base md:text-base"
                    {...field}
                  />
                  {errors.descricao && (
                    <FormMessage>{errors.descricao.message}</FormMessage>
                  )}
                </Field>
              )}
            />
            <div className="flex w-full flex-col gap-6 md:flex-row">
              <FormField
                control={control}
                name="local"
                render={({ field }) => (
                  <Field className="w-full">
                    <Input
                      type="text"
                      placeholder="Local"
                      className="rounded-md"
                      {...field}
                    />
                    {errors.local && (
                      <FormMessage>{errors.local.message}</FormMessage>
                    )}
                  </Field>
                )}
              />
              <FormField
                control={control}
                name="preco"
                render={({ field }) => (
                  <Field className="w-full">
                    <Input
                      type="number"
                      placeholder="Preço"
                      className="rounded-md"
                      {...field}
                    />
                    {errors.local && (
                      <FormMessage>{errors.local.message}</FormMessage>
                    )}
                  </Field>
                )}
              />
            </div>
            <Button className="w-full rounded-md" type="submit">
              Publicar
            </Button>
          </form>
        </Form>
      </section>
    </>
  )
}
