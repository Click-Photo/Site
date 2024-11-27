import { faFolder, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { UpdateProfile } from './UpdateProfile'

interface ClientOptionsProps {
  name: string
  email: string
  telephone: string
  cep: string
  cpf: string
}

export function ClientOptions({
  name,
  email,
  telephone,
  cep,
  cpf,
}: ClientOptionsProps) {
  return (
    <section className="flex flex-col gap-6">
      <Dialog>
        <DialogTrigger className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl bg-gray-light-click px-7 py-5 text-[#555555] transition-colors hover:bg-white hover:text-black">
          <div className="flex items-center gap-2 sm:gap-4">
            <FontAwesomeIcon icon={faUser} className="text-xl sm:text-2xl" />
            <p className="text-lg font-bold uppercase leading-none sm:text-xl">
              info
            </p>
          </div>
          <span className="flex gap-1 text-lg font-bold leading-none text-[#DB4949] group-hover:text-red-500 sm:text-xl">
            ver +
          </span>
        </DialogTrigger>
        <DialogContent className="font-secondary">
          <DialogHeader className="px-9 py-8">
            <DialogTitle className="text-left text-xl uppercase text-black-click">
              informações
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="flex flex-col gap-6 px-9 py-8 pt-0 text-black-click">
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold uppercase">Nome:</p>
              <p className="text-base">{name}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold uppercase">Email:</p>
              <p className="text-base">{email}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold uppercase">Telefone:</p>
              <p className="text-base">{telephone}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold uppercase">CEP:</p>
              <p className="text-base">{cep}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold uppercase">CPF:</p>
              <p className="text-base">{cpf}</p>
            </div>
          </DialogDescription>
          <DialogFooter className="items-center justify-center rounded-b-2xl bg-white p-6">
            <UpdateProfile
              name={name}
              email={email}
              telephone={telephone}
              cep={cep}
            />
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Link
        href="/meus-jobs"
        className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl bg-gray-light-click px-7 py-5 text-[#555555] transition-colors hover:bg-white hover:text-black"
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <FontAwesomeIcon icon={faFolder} className="text-xl sm:text-2xl" />
          <p className="text-lg font-bold uppercase leading-none sm:text-xl">
            jobs
          </p>
        </div>
        <span className="flex gap-1 text-lg font-bold leading-none text-[#DB4949] group-hover:text-red-500 sm:text-xl">
          ver +
        </span>
      </Link>

      <Link
        href="/postar-job"
        className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl bg-gray-light-click px-7 py-5 text-[#555555] transition-colors hover:bg-white hover:text-black"
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <FontAwesomeIcon icon={faPlus} className="text-xl sm:text-2xl" />
          <p className="text-lg font-bold uppercase leading-none sm:text-xl">
            Postar Job
          </p>
        </div>
        <span className="flex gap-1 text-lg font-bold leading-none text-[#DB4949] group-hover:text-red-500 sm:text-xl">
          ver +
        </span>
      </Link>
    </section>
  )
}
