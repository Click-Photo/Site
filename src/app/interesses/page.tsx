'use client'

import { CardJobFeed } from '@/components/CardJobFeed'
import { NavbarUser } from '@/components/NavbarUser'
import { jobsInterests } from '@/data/jobsInterests'

export default function Interests() {
  return (
    <>
      <NavbarUser name="Aline Fernandes" />
      <section className="w-screen p-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold uppercase">Jobs</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {jobsInterests.map((job) => (
                <CardJobFeed
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  date={job.date}
                  address={job.address}
                  description={job.description}
                  amountProporsals={job.amountProporsals}
                  value={job.value}
                  client={job.client}
                  isInterested
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
