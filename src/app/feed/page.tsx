'use client'

import { CardArt } from '@/components/CardArt'
import { CardJobFeed } from '@/components/CardJobFeed'
import { Loading } from '@/components/Loading'
import { MessageError } from '@/components/MessageError'
import { NavbarUser } from '@/components/NavbarUser'
import { PhotographersSearch } from '@/components/PhotographersSearch'
import { AuthContext } from '@/contexts/AuthContext'
import { useAllJobs } from '@/hooks/useAllJobs'
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

  if (user?.role === 'admin') {
    return router.push('/admin')
  }

  const {
    data: fetchedPhotographers,
    isLoading: isLoadingPhotographers,
    isError: isErrorPhotographers,
    error: errorPhotographers,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = usePhotographers(user.role)

  const {
    data: portfolio,
    isLoading: isLoadingPortfolio,
    isError: isErrorPortfolio,
    error: errorPortfolio,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useAllPortfolio(user.role)

  const {
    data: jobs,
    isLoading: isLoadingJobs,
    isError: isErrorJobs,
    error: errorJobs,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useAllJobs(user.role)

  if (
    errorJobs?.status === 401 ||
    errorPhotographers?.status === 401 ||
    errorPortfolio?.status === 401
  ) {
    logout()
    router.push('/login')
  }

  return (
    <>
      {isLoadingPhotographers ||
        isLoadingPortfolio ||
        (isLoadingJobs && <Loading />)}
      {isErrorPhotographers && (
        <MessageError message={errorPhotographers.message} />
      )}
      {isErrorPortfolio && <MessageError message={errorPortfolio.message} />}
      {isErrorJobs && <MessageError message={errorJobs.message} />}
      <NavbarUser />
      <section className="w-screen p-6">
        <div className="mx-auto w-full max-w-7xl">
          {user?.role === 'cliente' && (
            <div className="flex flex-col gap-8">
              {fetchedPhotographers && (
                <PhotographersSearch photographersList={fetchedPhotographers} />
              )}
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold uppercase">Artes</h2>
                {!portfolio || portfolio?.length === 0 ? (
                  <p>Nada a ser exibido... por enquanto</p>
                ) : (
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolio.map((art) => (
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
          )}
          {user?.role === 'fotografo' && (
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold uppercase">Jobs</h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {!jobs || jobs?.length === 0 ? (
                  <p>Nada a ser exibido... por enquanto</p>
                ) : (
                  jobs.map((job) => (
                    <CardJobFeed
                      key={job.id}
                      id={job.id}
                      idCliente={job.idCliente}
                      idFotografo={job.idFotografo}
                      dataJob={job.dataJob}
                      titulo={job.titulo}
                      descricao={job.descricao}
                      local={job.local}
                      status={job.status}
                      preco={job.preco}
                    />
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
