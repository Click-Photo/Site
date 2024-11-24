'use client'

import {
  FeedCardClient,
  FeedCardClientProps,
  Photographer,
} from '@/components/FeedCardClient'
import { NavbarUser } from '@/components/NavBarUser'
import { PhotographersSearch } from '@/components/PhotographersSearch'
import { useAuth } from '@/contexts/AuthContext'
import React from 'react'

export default function Feed() {
  const { role } = useAuth()

  const photographers: Photographer[] = [
    {
      id: '1',
      name: 'Carolina',
      photo:
        'https://cdn.pixabay.com/photo/2022/04/30/14/04/woman-7165664_960_720.jpg',
    },
    {
      id: '2',
      name: 'Júlia',
      photo:
        'https://cdn.pixabay.com/photo/2023/09/26/17/32/woman-8277925_1280.jpg',
    },
    {
      id: '3',
      name: 'Cris',
      photo:
        'https://cdn.pixabay.com/photo/2019/01/21/17/45/woman-3946473_960_720.jpg',
    },
    {
      id: '4',
      name: 'Amanda',
      photo:
        'https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_960_720.jpg',
    },
  ]

  const feedArts: FeedCardClientProps[] = [
    {
      id: '1',
      title: 'Lorem Ipsum',
      photo:
        'https://cdn.pixabay.com/photo/2016/05/10/02/17/girl-1382947_960_720.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adip',
      photographer: photographers[0],
    },
    {
      id: '2',
      title: 'Lorem Ipsum',
      photo:
        'https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adip',
      photographer: photographers[1],
    },
  ]

  return (
    <>
      <NavbarUser name="Aline Fernandes" />
      <section className="w-screen p-9 md:p-6">
        <div className="mx-auto w-full max-w-7xl">
          {role === 'cliente' && (
            <div className="flex flex-col gap-8">
              <PhotographersSearch photographersList={photographers} />
              <div className="flex flex-col gap-4">
                <h2 className="font-bold">Artes</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {feedArts.map((feedArt) => (
                    <FeedCardClient
                      key={feedArt.id}
                      id={feedArt.id}
                      photo={feedArt.photo}
                      title={feedArt.title}
                      description={feedArt.description}
                      photographer={feedArt.photographer}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
