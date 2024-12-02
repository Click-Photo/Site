'use client'

import { CardJob } from '@/components/CardJob'
import { NavbarUser } from '@/components/NavbarUser'
import { jobs } from '@/data/jobs'

export default function MyJobs() {
  return (
    <>
      <NavbarUser />
      <section className="w-screen p-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold uppercase">Meus Jobs</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <CardJob
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  date={job.date}
                  address={job.address}
                  description={job.description}
                  amountProporsals={job.proporsals.length}
                  value={job.value}
                  client={job.client}
                  status={job.status}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
