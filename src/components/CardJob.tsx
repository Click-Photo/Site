'use client'

import { Client } from '@/data/clients'
import { formatDate } from '@/utils/format-date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck,
  faCircleXmark,
  faClock,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
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

export interface CardJobProps {
  id: string
  title: string
  date: Date
  address: string
  description: string
  amountProporsals: number
  value: number
  client: Client
  status: 'ACEITO' | 'CANCELADO' | 'PENDENTE'
}

export function CardJob({
  id,
  title,
  date,
  address,
  amountProporsals,
  description,
  value,
  client,
  status,
}: CardJobProps) {
  return (
    <div
      className="flex flex-col rounded-md bg-gray-light-click text-black"
      key={id}
    >
      <div className="flex items-center justify-between rounded-t-lg bg-white p-3 font-secondary md:p-6">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold uppercase">{formatDate(date)}</p>
          <p className="truncate text-lg font-bold uppercase">{title}</p>
        </div>
        <div>
          {status === 'ACEITO' && (
            <FontAwesomeIcon
              icon={faCircleCheck}
              color="#0B7E40"
              className="h-8 w-8"
            />
          )}
          {status === 'CANCELADO' && (
            <FontAwesomeIcon
              icon={faCircleXmark}
              color="#7E0B20"
              className="h-8 w-8"
            />
          )}
          {status === 'PENDENTE' && (
            <FontAwesomeIcon
              icon={faClock}
              color="#5F5F5F"
              className="h-8 w-8"
            />
          )}
        </div>
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
                  <p className="text-lg font-bold">{status}</p>
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
              <DialogFooter className="w-full flex-col gap-5 rounded-b-2xl bg-white p-6">
                <div className="flex flex-col font-primary text-2xl">
                  <p className="font-bold">Preço:</p>
                  R$ {value}
                </div>
                <Button
                  className="mx-auto w-max rounded-full uppercase"
                  variantColor="tertiary"
                >
                  Cancelar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
