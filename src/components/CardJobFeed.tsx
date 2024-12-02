'use client'

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
import { Button } from './Button'
import Link from 'next/link'
import { Input } from './Input'
import { cn } from '@/lib/utils'
import { JobData } from '@/@types/jobData'

export interface CardJobFeedProps extends JobData {}

export function CardJobFeed({
  id,
  titulo,
  descricao,
  local,
  dataJob,
  preco,
}: CardJobFeedProps) {
  return (
    <div
      className="flex flex-col rounded-md bg-gray-light-click text-black"
      key={id}
    >
      <div className="flex items-center justify-between rounded-t-lg bg-white p-3 font-secondary">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold uppercase">{formatDate(dataJob)}</p>
          <p className="truncate text-lg font-bold uppercase">{titulo}</p>
        </div>
        <Button
          className={cn(
            'group flex-col rounded-lg border-none bg-transparent p-3 text-xs normal-case hover:bg-black-click hover:text-white focus:bg-black-click focus:text-white md:text-sm',
          )}
        >
          <ThumbsUp />
          Interesse
        </Button>
      </div>
      <div className="flex flex-col gap-4 p-3">
        <div className="flex items-center justify-between font-secondary">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLocationDot} size="xl" />
            <p className="font-bold uppercase">{local}</p>
          </div>
        </div>
        <p className="truncate text-justify">{descricao}</p>
        <div className="flex items-center justify-between gap-4">
          <p className="font-secondary text-xl font-bold">
            {preco.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 2,
            })}
          </p>
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
                      {formatDate(dataJob)}
                    </p>
                  </div>
                </DialogTitle>
                <DialogDescription className="flex flex-col gap-4 text-left text-black">
                  <h3 className="mt-2 text-xl font-black uppercase">
                    {titulo}
                  </h3>
                  <div className="flex items-center justify-between">
                    <Button asChild variantColor="tertiary" className="px-6">
                      <Link href={`/cliente/${id}`}>Ver Cliente</Link>
                    </Button>
                  </div>
                  <p className="font-primary text-base">{descricao}</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold">Local</p>
                    <p className="text-base">{local}</p>
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
                    placeholder={`${preco.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                      maximumFractionDigits: 2,
                    })}`}
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
