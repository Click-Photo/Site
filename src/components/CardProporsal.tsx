import { formatDate } from '@/utils/format-date'
import Link from 'next/link'
import { Button } from './Button'
import { ProporsalData } from '@/@types/proporsalData'

interface CardProporsalProps extends ProporsalData {}

export function CardProporsal({
  id,
  idFotografo,
  idJobs,
  valorProposta,
  dataCriacao,
}: CardProporsalProps) {
  return (
    <div
      className="flex flex-col rounded-md bg-gray-light-click text-black"
      key={`${id.toString()},${idJobs}`}
    >
      <div className="flex items-center justify-between rounded-t-md bg-white p-3 md:p-6">
        <div className="flex flex-col gap-1 font-secondary">
          <p className="truncate text-xs uppercase">Data da Proposta</p>
          <p className="text-sm font-bold uppercase">
            {formatDate(dataCriacao)}
          </p>
        </div>
        <p className="font-primary text-lg font-bold md:text-xl">
          {Number(valorProposta).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <div className="flex flex-col gap-8 p-3 md:p-6">
        <Button variantColor="tertiary" className="w-full" asChild>
          <Link href={`/fotografo/${idFotografo}`}>Ver Fotógrafo</Link>
        </Button>
        <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-8">
          <Button className="w-full bg-[#7E0B20] py-2 text-white hover:bg-[#ad0f2c] focus:bg-[#ad0f2c] md:py-4">
            Recusar
          </Button>
          <Button className="w-full bg-[#0B7E40] py-2 text-white hover:bg-[#0fad59] focus:bg-[#0fad59] md:py-4">
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
}
