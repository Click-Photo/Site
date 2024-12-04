'use client'

import { ThumbsUp } from 'lucide-react'
import { formatDate } from '@/utils/format-date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Button } from './Button'
import Link from 'next/link'
import { Input } from './Input'
import { useForm } from 'react-hook-form'
import {
  registerProporsalFormSchema,
  RegisterProporsalFormSchema,
} from '@/schema/registerProporsalFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Field } from './Field'
import { useContext, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { fetchPostProporsalJob } from '@/hooks/usePostProporsalJob'
import { Loading } from './Loading'
import { MessageError } from './MessageError'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { InterestData } from '@/@types/interestData'

type CardJobInterestProps = InterestData & {
  isInterested?: boolean
}

export function CardJobInterest({
  id,
  idCliente,
  titulo,
  descricao,
  local,
  dataJob,
  preco,
}: CardJobInterestProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [messageError, setMessageError] = useState<string | undefined>(
    undefined,
  )

  const { user } = useContext(AuthContext)

  const form = useForm<RegisterProporsalFormSchema>({
    resolver: zodResolver(registerProporsalFormSchema),
    defaultValues: {
      valorProposta: Number(preco),
    },
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form

  const router = useRouter()

  async function useHandleRegisterProporsal({
    valorProposta,
  }: RegisterProporsalFormSchema) {
    setIsLoading(true)
    setMessageError(undefined)

    await fetchPostProporsalJob(id, {
      idCliente,
      idFotografo: user!.id,
      valorProposta,
    })
      .then((response) => {
        if (response.status === 201) {
          router.refresh()
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
      <div
        className="flex flex-col rounded-md bg-gray-light-click text-black"
        key={id}
      >
        <div className="flex items-center justify-between rounded-t-lg bg-white p-3 font-secondary">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold uppercase">{formatDate(dataJob)}</p>
            <p className="max-w-44 truncate text-lg font-bold uppercase md:max-w-56 lg:max-w-full">
              {titulo}
            </p>
          </div>
          <div className="group flex flex-col items-center gap-1 rounded-lg border-none bg-black-click p-3 text-xs normal-case text-white md:text-sm">
            <ThumbsUp />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-3">
          <div className="flex items-center justify-between font-secondary">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} size="xl" />
              <p className="font-bold uppercase">{local}</p>
            </div>
          </div>
          <p className="truncate text-justify">{descricao}</p>
          <div className="flex items-center justify-between gap-4">
            <p className="font-secondary text-xl font-bold">
              {Number(preco).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 2,
              })}
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variantColor="tertiary" className="px-8">
                  Ver
                </Button>
              </DialogTrigger>
              <DialogContent className="font-secondary text-black">
                <DialogHeader className="px-6 pb-6 pt-9">
                  <DialogTitle className="flex justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-xs font-light uppercase">
                        Data do Job
                      </p>
                      <p className="text-sm font-bold uppercase">
                        {formatDate(dataJob)}
                      </p>
                    </div>
                  </DialogTitle>
                  <DialogDescription className="flex flex-col gap-4 text-left text-black">
                    <h3 className="mt-2 text-xl font-black uppercase">
                      {titulo}
                    </h3>
                    <div className="flex items-center justify-between">
                      <Button asChild variantColor="tertiary" className="px-6">
                        <Link href={`/cliente/${id}`}>Ver Cliente</Link>
                      </Button>
                    </div>
                    <p className="font-primary text-base">{descricao}</p>
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-bold">Local</p>
                      <p className="text-base">{local}</p>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="w-full flex-col gap-5 rounded-b-2xl bg-white p-6 font-primary">
                  <Form {...form}>
                    <form
                      className="flex flex-col justify-between gap-4"
                      onSubmit={handleSubmit(useHandleRegisterProporsal)}
                    >
                      <FormField
                        control={control}
                        name="valorProposta"
                        render={({ field }) => (
                          <Field className="space-y-0">
                            <FormLabel className="text-lg font-bold text-black">
                              Preço:
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={preco}
                                type="number"
                                variant="ghost"
                                {...field}
                              />
                            </FormControl>
                            {errors.valorProposta && (
                              <FormMessage>
                                {errors.valorProposta.message}
                              </FormMessage>
                            )}
                          </Field>
                        )}
                      />
                      <Button
                        className="mx-auto w-max rounded-full uppercase"
                        variantColor="tertiary"
                        type="submit"
                      >
                        Fazer Proposta
                      </Button>
                    </form>
                  </Form>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  )
}
