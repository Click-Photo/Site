'use client'

import { CardProporsal } from '@/components/CardProporsal'
import { NavbarUser } from '@/components/NavbarUser'
import { useDefaultUser } from '@/data/defaultUser'
import { jobs } from '@/data/jobs'
import { useParams, useRouter } from 'next/navigation'

export default function Proporsals() {
  const { name } = useDefaultUser()

  const params = useParams()
  const router = useRouter()

  const id = params.id

  const proporals = jobs.find((job) => job.id === id)?.proporsals

  if (!proporals) {
    router.push('/meus-jobs')
  }

  return (
    <>
      <NavbarUser name={name} />
      <section className="w-screen p-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold uppercase">Propostas</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {proporals?.map((proporsal) => (
                <CardProporsal
                  key={proporsal.id}
                  id={proporsal.id}
                  date={proporsal.date}
                  value={proporsal.value}
                  photographer={proporsal.photographer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
