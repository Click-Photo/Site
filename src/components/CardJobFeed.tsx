'use client'

import { Client } from '@/data/clients'
import { ThumbsUp } from 'lucide-react'
import { formatDate } from '@/utils/format-date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './Button'
import Link from 'next/link'
import { Input } from './Input'
import { cn } from '@/lib/utils'

export interface CardJobFeedProps {
  id: string
  title: string
  date: Date
  address: string
  description: string
  amountProporsals: number
  value: number
  client: Client
  isInterested?: true
}

export function CardJobFeed({
  id,
  title,
  date,
  address,
  amountProporsals,
  description,
  value,
  client,
  isInterested,
}: CardJobFeedProps) {
  return (
    <div
      className="flex flex-col rounded-md bg-gray-light-click text-black"
      key={id}
    >
      <div className="flex items-center justify-between rounded-t-lg bg-white p-3 font-secondary">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold uppercase">{formatDate(date)}</p>
          <p className="truncate text-lg font-bold uppercase">{title}</p>
        </div>
        <Button
          className={cn(
            'group flex-col rounded-lg border-none bg-transparent p-3 text-xs normal-case hover:bg-black-click hover:text-white focus:bg-black-click focus:text-white md:text-sm',
          )}
        >
          <ThumbsUp fill={isInterested && 'black'} />
          Interesse
        </Button>
      </div>
      <div className="flex flex-col gap-4 p-3">
        <div className="flex items-center justify-between font-secondary">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLocationDot} size="xl" />
            <p className="font-bold uppercase">{address}</p>
          </div>
          <div className="flex flex-col items-center gap-1 text-xs font-bold uppercase md:text-sm">
            <span>{amountProporsals}</span>
            <p>Propostas</p>
          </div>
        </div>
        <p className="truncate text-justify">{description}</p>
        <div className="flex items-center justify-between gap-4">
          <p className="font-secondary text-xl font-bold">R$ {value}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variantColor="tertiary" className="px-8">
                Ver
              </Button>
            </DialogTrigger>
            <DialogContent className="font-secondary text-black">
              <DialogHeader className="px-6 pb-6 pt-9">
                <DialogTitle className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-light uppercase">Data do Job</p>
                    <p className="text-sm font-bold uppercase">
                      {formatDate(date)}
                    </p>
                  </div>
                </DialogTitle>
                <DialogDescription className="flex flex-col gap-4 text-left text-black">
                  <h3 className="mt-2 text-xl font-black uppercase">{title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={client.photo} />
                        <AvatarFallback>
                          {client.name.substring(0, 1)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-base">{client.name}</span>
                    </div>
                    <Button asChild variantColor="tertiary" className="px-6">
                      <Link href={`/cliente/${id}`}>Ver</Link>
                    </Button>
                  </div>
                  <p className="font-primary text-base">{description}</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold">Local</p>
                    <p className="text-base">{address}</p>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="w-full flex-col gap-5 rounded-b-2xl bg-white p-6 font-primary">
                <div className="flex flex-col justify-between">
                  <p className="text-lg font-bold">Preço:</p>
                  <Input
                    variant="ghost"
                    className="md:md-max h-max w-full py-2"
                    type="number"
                    placeholder={`R$ ${value}`}
                  />
                </div>
                <Button
                  className="mx-auto w-max rounded-full uppercase"
                  variantColor="tertiary"
                >
                  Fazer Proposta
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
