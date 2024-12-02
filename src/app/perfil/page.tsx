'use client'

import { Loading } from '@/components/Loading'
import { MessageError } from '@/components/MessageError'
import { NavbarUser } from '@/components/NavbarUser'
import { ClientOptions } from '@/components/Profile/ClientOptions'
import { PhotographerOptions } from '@/components/Profile/PhotographerOptions'
import { StarRating } from '@/components/StarRating'
import { AuthContext } from '@/contexts/AuthContext'
import { useAverageUser } from '@/hooks/useAverageUser'
import { usePorfolioPhotographer } from '@/hooks/usePorfoltioPhotographer'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export default function Profile() {
  const { token, user, logout } = useContext(AuthContext)

  const router = useRouter()

  if (!token || !user) {
    return router.push('/login')
  }

  if (user?.role === 'admin') {
    return router.push('/admin')
  }

  const {
    data: userFetched,
    isLoading: isLoadingUser,
    isError: isErrorUser,
    error: errorUser,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useUser(user.id, user.role)

  const {
    data: portfolio,
    isLoading: isLoadingPortfolio,
    isError: isErrorPortfolio,
    error: errorPortfolio,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = usePorfolioPhotographer(user.id, user.role)

  const {
    data: average,
    isLoading: isLoadingAverage,
    isError: isErrorAverage,
    error: errorAverage,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useAverageUser(user.id, user.role)

  if (
    errorUser?.status === 401 ||
    errorPortfolio?.status === 401 ||
    errorAverage?.status === 401
  ) {
    logout()
    router.push('/login')
  }

  return (
    <>
      {isLoadingUser || isLoadingPortfolio || (isLoadingAverage && <Loading />)}
      {isErrorUser && <MessageError message={errorUser.message} />}
      {isErrorPortfolio && <MessageError message={errorPortfolio.message} />}
      {isErrorAverage && <MessageError message={errorAverage.message} />}
      <NavbarUser />
      {userFetched && (
        <section className="flex min-h-[calc(100vh-6rem)] w-screen items-center px-6 py-12">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="self-center font-secondary text-xl font-bold text-white">
                {userFetched.nome}
              </h1>
            </div>

            <div className="flex w-full max-w-96 items-center justify-evenly">
              <div className="flex w-full flex-col items-center gap-1 text-[#F8B84E] sm:w-28">
                <p className="text-sm">{average?.mediaNota}</p>
                <StarRating score={average!.totalAvaliacoes} />
              </div>
            </div>

            {user.role === 'fotografo' && (
              <PhotographerOptions
                nome={userFetched.nome}
                email={userFetched.email}
                telefone={userFetched.telefone}
                CEP={userFetched.CEP}
                CPF={userFetched.CPF}
                id={userFetched.id}
                role={userFetched.role}
                portfolio={portfolio}
              />
            )}

            {user.role === 'cliente' && (
              <ClientOptions
                nome={userFetched.nome}
                email={userFetched.email}
                telefone={userFetched.telefone}
                CEP={userFetched.CEP}
                CPF={userFetched.CPF}
                id={userFetched.id}
                role={userFetched.role}
              />
            )}
          </div>
        </section>
      )}
    </>
  )
}
