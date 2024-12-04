'use client'

import { CardProporsal } from '@/components/CardProporsal'
import { Loading } from '@/components/Loading'
import { MessageError } from '@/components/MessageError'
import { NavbarUser } from '@/components/NavbarUser'
import { AuthContext } from '@/contexts/AuthContext'
import { useProporsalsJob } from '@/hooks/useProporalsJobs'
import { useParams, useRouter } from 'next/navigation'
import { useContext } from 'react'

export default function Proporsals() {
  const { token, user, logout } = useContext(AuthContext)

  const params = useParams()
  const router = useRouter()

  const id = params.id

  if (!token || !user) {
    return router.push('/login')
  }

  if (user?.role === 'admin') {
    return router.push('/feed')
  }

  if (user?.role === 'fotografo') {
    return router.back()
  }

  const {
    data: proporsals,
    isLoading,
    isFetched,
    isError,
    error,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useProporsalsJob(Number(id.toString()))

  console.log(proporsals)

  if (error?.status === 401) {
    logout()
    router.push('/login')
  }

  return (
    <>
      {isLoading && <Loading />}
      {isError && <MessageError message={error.message} />}
      {isFetched && (
        <>
          <NavbarUser />
          <section className="w-screen p-6">
            <div className="mx-auto w-full max-w-7xl">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold uppercase">Propostas</h2>
                {!proporsals || proporsals.length === 0 ? (
                  <p>Nada a ser exibido... por enquanto</p>
                ) : (
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {proporsals.map((proporsal) => (
                      <CardProporsal
                        key={proporsal.id}
                        id={proporsal.id}
                        idJobs={proporsal.idJobs}
                        idFotografo={proporsal.idFotografo}
                        valorProposta={proporsal.valorProposta}
                        dataCriacao={proporsal.dataCriacao}
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
