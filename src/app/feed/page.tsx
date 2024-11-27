'use client'

import { CardArt } from '@/components/CardArt'
import { CardJobFeed } from '@/components/CardJobFeed'
import { NavbarUser } from '@/components/NavbarUser'
import { PhotographersSearch } from '@/components/PhotographersSearch'
import { useAuth } from '@/contexts/AuthContext'
import { feedClient } from '@/data/feedPostsClient'
import { feedPhothographer } from '@/data/feedPostsPhotographer'
import { photographers } from '@/data/photographers'
import React from 'react'

export default function Feed() {
  const { role } = useAuth()

  return (
    <>
      <NavbarUser name="Aline Fernandes" />
      <section className="w-screen p-6">
        <div className="mx-auto w-full max-w-7xl">
          {role === 'cliente' && (
            <div className="flex flex-col gap-8">
              <PhotographersSearch photographersList={photographers} />
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold uppercase">Artes</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {feedClient.map((post) => (
                    <CardArt
                      key={post.id}
                      id={post.id}
                      photo={post.photo}
                      title={post.title}
                      description={post.description}
                      photographer={post.photographer}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          {role === 'fotografo' && (
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold uppercase">Jobs</h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {feedPhothographer.map((job) => (
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
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
