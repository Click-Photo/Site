'use client'

import { CardJobInterest } from '@/components/CardJobInterest'
import { Loading } from '@/components/Loading'
import { MessageError } from '@/components/MessageError'
import { NavbarUser } from '@/components/NavbarUser'
import { AuthContext } from '@/contexts/AuthContext'
import { useInterests } from '@/hooks/useInterests'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export default function Interests() {
  const { user, token, logout } = useContext(AuthContext)

  const router = useRouter()

  if (!token || !user) {
    return router.push('/login')
  }

  if (user?.role === 'admin') {
    return router.push('/admin')
  }

  const {
    data: interests,
    isLoading: isLoadingInterests,
    isFetched: isFetchedInterests,
    isError: isErrorInterests,
    error: errorInterests,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useInterests(user.id, user.role)

  if (errorInterests?.status === 401) {
    logout()
    return router.push('/login')
  }

  return (
    <>
      {isLoadingInterests && <Loading />}
      {isErrorInterests && <MessageError message={errorInterests.message} />}
      {isFetchedInterests && (
        <>
          <NavbarUser />
          <section className="w-screen p-6">
            <div className="mx-auto w-full max-w-7xl">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold uppercase">Jobs</h2>
                {!interests || interests?.length === 0 ? (
                  <p>Nenhum job marcado como Interesse, por enquanto</p>
                ) : (
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {interests.map((job) => (
                      <CardJobInterest
                        key={job.interesseId}
                        interesseId={job.interesseId}
                        id={job.interesseId}
                        idCliente={job.idCliente}
                        idFotografo={job.idFotografo}
                        dataJob={job.dataJob}
                        titulo={job.titulo}
                        descricao={job.descricao}
                        local={job.local}
                        status={job.status}
                        preco={job.preco}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}
