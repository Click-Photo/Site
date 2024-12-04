'use client'

import { CardJobFeed } from '@/components/CardJobFeed'
import { Loading } from '@/components/Loading'
import { MessageError } from '@/components/MessageError'
import { NavbarUser } from '@/components/NavbarUser'
import { AuthContext } from '@/contexts/AuthContext'
import { useAllJobs } from '@/hooks/useAllJobs'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export default function Jobs() {
  const { token, user, logout } = useContext(AuthContext)

  const router = useRouter()

  if (!token || !user) {
    return router.push('/login')
  }

  if (user.role === 'admin') {
    return router.push('/admin')
  }

  if (user.role === 'cliente') {
    return router.push('/feed')
  }

  const {
    data: jobsFetched,
    isError: isErrorJobs,
    isLoading: isLoadingJobs,
    isFetched: isFetchedJobs,
    error: errorJobs,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useAllJobs(user.role)

  if (errorJobs?.status === 401) {
    logout()
    return router.push('/login')
  }

  return (
    <>
      {isLoadingJobs && <Loading />}
      {isErrorJobs && <MessageError message={errorJobs?.message} />}
      {isFetchedJobs && user?.role === 'fotografo' && (
        <section>
          <NavbarUser />
          <section className="w-screen p-6">
            <div className="mx-auto w-full max-w-7xl">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold uppercase">Jobs</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                  {!jobsFetched || jobsFetched?.length === 0 ? (
                    <p>Nada a ser exibido... por enquanto</p>
                  ) : (
                    jobsFetched.map((job) => (
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
            </div>
          </section>
        </section>
      )}
    </>
  )
}
