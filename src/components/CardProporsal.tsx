import { Proporsal } from '@/data/proporsals'
import { formatDate } from '@/utils/format-date'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { StarRating } from './StarRating'
import Link from 'next/link'
import { Button } from './Button'

interface CardProporsalProps extends Proporsal {}

export function CardProporsal({
  id,
  date,
  photographer,
  value,
}: CardProporsalProps) {
  return (
    <div
      className="flex flex-col rounded-md bg-gray-light-click text-black"
      key={id}
    >
      <div className="flex items-center justify-between rounded-t-md bg-white p-3 md:p-6">
        <div className="flex flex-col gap-1 font-secondary">
          <p className="truncate text-xs uppercase">Data do Job</p>
          <p className="text-sm font-bold uppercase">{formatDate(date)}</p>
        </div>
        <p className="font-primary text-lg font-bold md:text-xl">
          {value.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <div className="flex flex-col gap-8 p-3 md:p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 md:h-20 md:w-20">
            <AvatarImage src={photographer.photo} />
            <AvatarFallback>{photographer.name.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold md:text-2xl">
              {photographer.name}
            </span>
            <span className="flex items-center gap-2">
              <StarRating score={photographer.rating} />({photographer.rating})
            </span>
            <Link
              href={`/fotografo/${photographer.id}`}
              className="mt-2 w-max hover:underline focus:underline"
            >
              Ver Perfil
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-8">
          <Button className="w-full bg-[#7E0B20] py-2 text-white md:py-4">
            Recusar
          </Button>
          <Button className="w-full bg-[#0B7E40] py-2 text-white md:py-4">
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
}
