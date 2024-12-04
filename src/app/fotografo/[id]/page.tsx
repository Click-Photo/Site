'use client'

import { Button } from '@/components/Button'
import { Loading } from '@/components/Loading'
import { MessageError } from '@/components/MessageError'
import { NavbarUser } from '@/components/NavbarUser'
import { PhotographerProfile } from '@/components/PhotographerProfile'
import { StarRating } from '@/components/StarRating'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { AuthContext } from '@/contexts/AuthContext'
import { useAveragePhotographer } from '@/hooks/useAveragePhotographer'
import { usePhotographer } from '@/hooks/usePhotographer'
import { usePorfolioPhotographer } from '@/hooks/usePorfoltioPhotographer'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useContext } from 'react'

export default function PhotographerById() {
  const { token, user, logout } = useContext(AuthContext)

  const router = useRouter()
  const params = useParams()

  if (!token || !user) {
    return router.push('/login')
  }

  if (user.role === 'admin') {
    return router.push('/admin')
  }

  if (user.role === 'fotografo') {
    return router.push('/feed')
  }

  const id = params.id

  const {
    data: photographer,
    isLoading: isLoadingPhotographer,
    isFetched: isFetchedPhotographer,
    isError: isErrorPhotographer,
    error: errorPhotographer,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = usePhotographer(Number(id.toString()), user.role)

  const {
    data: portfolio,
    isLoading: isLoadingPortfolio,
    isFetched: isFetchedPortfolio,
    isError: isErrorPortfolio,
    error: errorPortfolio,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = usePorfolioPhotographer(Number(id.toString()))

  const {
    data: averageRating,
    isLoading: isLoadingAverage,
    isFetched: isFetchedAverage,
    isError: isErrorAverage,
    error: errorAverage,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useAveragePhotographer(Number(id.toString()), user.role)

  if (
    errorPhotographer?.status === 401 ||
    errorPortfolio?.status === 401 ||
    errorAverage?.status === 401
  ) {
    logout()
    return router.push('/login')
  }

  return (
    <>
      {isLoadingPhotographer ||
        isLoadingPortfolio ||
        (isLoadingAverage && <Loading />)}
      {isErrorPhotographer && (
        <MessageError message={errorPhotographer.message} />
      )}
      {isErrorPortfolio && <MessageError message={errorPortfolio.message} />}
      {isErrorAverage && <MessageError message={errorAverage.message} />}
      {isFetchedPhotographer &&
        isFetchedPortfolio &&
        isFetchedAverage &&
        photographer && (
          <>
            <NavbarUser />
            <section className="flex min-h-[calc(100vh-6rem)] w-screen items-center px-6 py-12">
              <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8">
                <div className="flex w-full flex-col items-center gap-4">
                  <h1 className="font-secondary text-xl font-bold text-white">
                    {photographer?.nome}
                  </h1>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full max-w-48">Contato</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader className="px-9 py-8">
                        <DialogTitle className="text-left text-xl uppercase text-black-click">
                          informações
                        </DialogTitle>
                      </DialogHeader>
                      <DialogDescription className="flex flex-col gap-6 px-9 py-8 pt-0 text-black-click">
                        <div className="flex w-full flex-col gap-2 text-lg">
                          <p>
                            <span className="font-bold">Email: </span>
                            {photographer.email}
                          </p>
                          <Button variantColor="tertiary" asChild>
                            <Link href={`mailto:${photographer.email}`}>
                              Enviar e-mail
                            </Link>
                          </Button>
                        </div>
                        <div className="flex w-full flex-col gap-2 text-lg">
                          <p>
                            <span className="font-bold">Telefone: </span>
                            {photographer.telefone}
                          </p>
                          <Button variantColor="tertiary" asChild>
                            <Link
                              href={`https://wa.me/55${photographer.telefone}`}
                            >
                              Enviar Mensagem
                            </Link>
                          </Button>
                        </div>
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="flex w-full max-w-96 items-center justify-evenly">
                  {averageRating && (
                    <div className="flex w-full flex-col items-center gap-1 text-[#F8B84E] sm:w-28">
                      <p className="text-sm">{averageRating.mediaNota}</p>
                      <StarRating
                        score={
                          averageRating.mediaNota === 'Sem avaliações'
                            ? 0
                            : averageRating.mediaNota
                        }
                      />
                    </div>
                  )}
                </div>

                <PhotographerProfile portfolio={portfolio} />
              </div>
            </section>
          </>
        )}
    </>
  )
}
