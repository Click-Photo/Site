import { Button } from '../Button'
import { Input } from '../Input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

interface UpdateProfileProps {
  name: string
  email: string
  telephone: string
  cep: string
}

export function UpdateProfile({
  name,
  email,
  cep,
  telephone,
}: UpdateProfileProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-40 bg-black-click text-white">Editar</Button>
      </DialogTrigger>
      <DialogContent className="font-secondary">
        <DialogHeader>
          <DialogTitle className="px-9 py-8 text-xl uppercase text-black">
            Editar Informações
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-6 px-9 py-8 pt-0 text-black">
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold uppercase">Nome:</p>
              <Input variant="ghost" defaultValue={name} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold uppercase">Email:</p>
              <Input variant="ghost" defaultValue={email} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold uppercase">Telefone:</p>
              <Input variant="ghost" defaultValue={telephone} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold uppercase">CEP:</p>
              <Input variant="ghost" defaultValue={cep} />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="items-center justify-center rounded-b-2xl bg-white p-6">
          <Button className="w-40 bg-black-click text-white">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
