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
import Link from 'next/link'
import { PortfolioData } from '@/@types/portfolioData'

export interface FeedCardClientProps extends PortfolioData {}

export function CardArt({
  id,
  descricao,
  fotoUrl,
  fotografoId,
  fotografoNome,
}: FeedCardClientProps) {
  return (
    <div
      className="flex flex-col gap-2 rounded-lg bg-gray-light-click p-4 text-black"
      key={id}
    >
      <Image
        width={1280}
        height={1280}
        src={fotoUrl}
        alt={`Foto tirada por ${fotografoNome}`}
        className="aspect-square rounded-lg object-cover"
      />
      {/* <h3 className="text-lg font-bold">{title}</h3> */}
      <div className="flex items-center justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-max py-1">Ver</Button>
          </DialogTrigger>
          <DialogContent className="p-6 text-black">
            <DialogHeader>
              <DialogTitle>
                <Image
                  width={1000}
                  height={1000}
                  src={fotoUrl}
                  alt={`Foto tirada por ${fotografoNome}`}
                  className="aspect-square rounded-lg object-cover"
                />
              </DialogTitle>
              <DialogDescription className="flex flex-col gap-4 text-left text-black">
                {/* <h3 className="mt-2 text-xl font-bold">{title}</h3> */}
                <p className="text-base">{descricao}</p>
                <span className="text-sm">{fotografoNome}</span>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="w-full justify-center">
              <Button className="w-full rounded-full uppercase" asChild>
                <Link href={`/fotografo/${fotografoId}`}>Ver Perfil</Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
