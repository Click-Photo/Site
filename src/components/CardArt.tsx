'use client'

import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Photographer } from '@/data/photographers'
import Link from 'next/link'

export interface FeedCardClientProps {
  id: string
  photo: string
  title: string
  description: string
  photographer: Photographer
}

export function CardArt({
  id,
  photo,
  title,
  description,
  photographer,
}: FeedCardClientProps) {
  return (
    <div
      className="flex flex-col gap-2 rounded-md bg-gray-light-click p-4 text-black"
      key={id}
    >
      <Image
        width={1280}
        height={1280}
        src={photo}
        alt={`Foto tirada por ${photographer.name}`}
        className="aspect-square rounded-md object-cover"
      />
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={photographer.photo} />
            <AvatarFallback>{photographer.name.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <span className="text-sm">{photographer.name}</span>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-max py-1">Ver</Button>
          </DialogTrigger>
          <DialogContent className="p-6 text-black">
            <DialogHeader>
              <DialogTitle asChild>
                <Image
                  width={1280}
                  height={1280}
                  src={photo}
                  alt={`Foto tirada por ${photographer.name}`}
                  className="aspect-square rounded-md object-cover"
                />
              </DialogTitle>
              <DialogDescription className="flex flex-col gap-4 text-left text-black">
                <h3 className="mt-2 text-xl font-bold">{title}</h3>
                <p className="text-base">{description}</p>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={photographer.photo} />
                    <AvatarFallback>
                      {photographer.name.substring(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{photographer.name}</span>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="w-full justify-center">
              <Button className="w-full rounded-full uppercase" asChild>
                <Link href={`/fotografo/${photographer.id}`}>Ver Perfil</Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
