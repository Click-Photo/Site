'use client'

import { CardArt } from '@/components/CardArt'
import { Loading } from '@/components/Loading'
import { MessageError } from '@/components/MessageError'
import { NavbarUser } from '@/components/NavbarUser'
import { PhotographersSearch } from '@/components/PhotographersSearch'
import { AuthContext } from '@/contexts/AuthContext'
import { useAllPortfolio } from '@/hooks/useAllPortfolio'
import { usePhotographers } from '@/hooks/usePhotographers'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export default function Feed() {
  const { token, user, logout } = useContext(AuthContext)

  const router = useRouter()

  if (!token || !user) {
    return router.push('/login')
  }

  if (user.role === 'admin') {
    return router.push('/admin')
  }

  if (user.role === 'fotografo') {
    return router.push('/jobs')
  }

  const {
    data: photographersFetched,
    isError: isErrorPhotographers,
    isLoading: isLoadingPhotographers,
    isFetched: isFetchedPhotographers,
    error: errorPhotographers,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = usePhotographers(user.role)

  const {
    data: portfolioFetched,
    isError: isErrorPortfolio,
    isLoading: isLoadingPortfolio,
    isFetched: isFetchedPortfolio,
    error: errorPortfolio,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useAllPortfolio(user.role)

  if (errorPortfolio?.status === 401 || errorPhotographers?.status === 401) {
    logout()
    return router.push('/login')
  }

  return (
    <>
      {isLoadingPhotographers || (isLoadingPortfolio && <Loading />)}
      {isErrorPhotographers && (
        <MessageError message={errorPhotographers?.message} />
      )}
      {isErrorPortfolio && <MessageError message={errorPortfolio?.message} />}
      {isFetchedPhotographers && isFetchedPortfolio && (
        <section>
          <NavbarUser />
          <section className="w-screen p-6">
            <div className="mx-auto w-full max-w-7xl">
              <div className="flex flex-col gap-8">
                {photographersFetched && (
                  <PhotographersSearch
                    photographersList={photographersFetched}
                  />
                )}
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold uppercase">Artes</h2>
                  {!portfolioFetched || portfolioFetched?.length === 0 ? (
                    <p>Nada a ser exibido... por enquanto</p>
                  ) : (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {portfolioFetched.map((art) => (
                        <CardArt
                          key={art.id}
                          id={art.id}
                          fotografoId={art.fotografoId}
                          fotografoNome={art.fotografoNome}
                          fotoUrl={art.fotoUrl}
                          descricao={art.descricao}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </section>
      )}
    </>
  )
}
