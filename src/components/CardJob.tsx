'use client'

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
import { Button } from './Button'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { JobData } from '@/@types/jobData'

export interface CardJobProps extends JobData {}

export function CardJob({
  id,
  titulo,
  dataJob,
  local,
  descricao,
  preco,
  idCliente,
  status,
}: CardJobProps) {
  const { user } = useContext(AuthContext)

  return (
    <div
      className="flex flex-col rounded-lg bg-gray-light-click text-black"
      key={id}
    >
      <div className="flex items-center justify-between gap-3 rounded-t-lg bg-white p-3 font-secondary md:p-6">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold uppercase">{formatDate(dataJob)}</p>
          <p className="truncate text-lg font-bold uppercase">{titulo}</p>
        </div>
        <div>
          {status === 'Aceito' && (
            <FontAwesomeIcon
              icon={faCircleCheck}
              color="#0B7E40"
              className="h-8 w-8"
            />
          )}
          {status === 'Finalizado' && (
            <FontAwesomeIcon
              icon={faCircleXmark}
              color="#7E0B20"
              className="h-8 w-8"
            />
          )}
          {status === 'Pendente' && (
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
            <p className="font-bold uppercase">{local}</p>
          </div>
        </div>
        <p className="truncate text-justify">{descricao}</p>
        <div className="flex items-center justify-between gap-4">
          <p className="font-secondary text-xl font-bold">
            {Number(preco).toLocaleString('pt-BR', {
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
                  <p className="text-lg font-bold">{status}</p>
                </DialogTitle>
                <DialogDescription className="flex flex-col gap-4 text-left text-black">
                  <h3 className="mt-2 text-xl font-black uppercase">
                    {titulo}
                  </h3>
                  {user?.role === 'fotografo' && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base" key={idCliente}>
                          Cláudio
                        </span>
                      </div>
                      <Button asChild variantColor="tertiary" className="px-6">
                        <Link href={`/cliente/${id}`}>Ver Fotógrafo</Link>
                      </Button>
                    </div>
                  )}
                  <p className="font-primary text-base">{descricao}</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold">Local</p>
                    <p className="text-base">{local}</p>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="w-full flex-col gap-5 rounded-b-2xl bg-white p-6">
                <div className="flex flex-col font-primary text-2xl">
                  <p className="font-bold">Preço:</p>
                  {Number(preco).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 2,
                  })}
                </div>
                {user?.role === 'fotografo' && (
                  <Button
                    className="mx-auto w-max rounded-full uppercase"
                    variantColor="tertiary"
                  >
                    Cancelar
                  </Button>
                )}
                {user?.role === 'cliente' && (
                  <Button
                    className="mx-auto w-max rounded-full uppercase"
                    variantColor="tertiary"
                    asChild
                  >
                    <Link href={`/meus-jobs/${id}/propostas`}>
                      ver propostas
                    </Link>
                  </Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
