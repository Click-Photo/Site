import { useContext, useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { AuthContext } from '@/contexts/AuthContext'
import {
  updateProfileFormSchema,
  UpdateProfileFormSchema,
} from '@/schema/updateProfileFormSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { fetchUpdateUser } from '@/hooks/useUpdateUser'
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Field } from '../Field'
import { Loading } from '../Loading'
import { MessageError } from '../MessageError'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'

interface UpdateProfileProps {
  name: string
  email: string
  telephone: string
  cep: string
}

export function UpdateProfile({
  name,
  email,
  cep,
  telephone,
}: UpdateProfileProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [messageError, setMessageError] = useState<string | undefined>(
    undefined,
  )

  const { user } = useContext(AuthContext)

  const form = useForm<UpdateProfileFormSchema>({
    resolver: zodResolver(updateProfileFormSchema),
    defaultValues: { nome: name, email, CEP: cep, telefone: telephone },
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form

  const router = useRouter()

  async function useHandleUpdateProfile(body: UpdateProfileFormSchema) {
    setIsLoading(true)
    setMessageError(undefined)

    await fetchUpdateUser(body, user!.id, user!.role)
      .then((response) => {
        if (response?.status === 200) return router.push('/feed')
        else if (response?.status === 500) router.refresh()
      })
      .catch((error: AxiosError) => {
        setIsError(true)
        setMessageError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      {isLoading && <Loading />}
      {isError && <MessageError message={messageError} />}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-40 bg-black-click text-white hover:bg-black focus:bg-black">
            Editar
          </Button>
        </DialogTrigger>
        <DialogContent className="font-secondary">
          <DialogHeader>
            <DialogTitle className="px-9 py-8 text-xl uppercase text-black">
              Editar Informações
            </DialogTitle>
            <DialogDescription
              className="flex flex-col gap-6 px-9 py-8 pt-0 text-black"
              asChild
            >
              <Form {...form}>
                <form
                  className="mt-4 flex w-full flex-col gap-8 px-9 pb-8"
                  onSubmit={handleSubmit(useHandleUpdateProfile)}
                >
                  <FormField
                    control={control}
                    name="nome"
                    render={({ field }) => (
                      <Field className="flex flex-col gap-1">
                        <FormLabel className="text-lg font-bold uppercase text-black">
                          Nome:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nome"
                            type="text"
                            variant="ghost"
                            {...field}
                          />
                        </FormControl>
                        {errors.nome && (
                          <FormMessage>{errors.nome.message}</FormMessage>
                        )}
                      </Field>
                    )}
                  />
                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <Field className="flex flex-col gap-1">
                        <p className="text-lg font-bold uppercase text-black">
                          Email:
                        </p>
                        <FormControl>
                          <Input
                            placeholder="Email"
                            type="text"
                            variant="ghost"
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
                    name="telefone"
                    render={({ field }) => (
                      <Field className="flex flex-col gap-1">
                        <p className="text-lg font-bold uppercase text-black">
                          Telefone:
                        </p>
                        <FormControl>
                          <Input
                            placeholder="Telefone"
                            type="text"
                            variant="ghost"
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
                      <Field className="flex flex-col gap-1">
                        <p className="text-lg font-bold uppercase text-black">
                          CEP:
                        </p>
                        <FormControl>
                          <Input
                            placeholder="CEP"
                            type="text"
                            variant="ghost"
                            {...field}
                          />
                        </FormControl>
                        {errors.CEP && (
                          <FormMessage>{errors.CEP.message}</FormMessage>
                        )}
                      </Field>
                    )}
                  />
                  <Button
                    className="w-40 self-end bg-black-click text-white"
                    type="submit"
                  >
                    Salvar
                  </Button>
                </form>
              </Form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
