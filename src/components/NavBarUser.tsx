import Image from 'next/image'
import logo from '@/assets/logo.svg'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { useAuth } from '@/contexts/AuthContext'

interface NavbarUserProps {
  name: string
}

export function NavbarUser({ name }: NavbarUserProps) {
  const { role } = useAuth()

  return (
    <nav className="w-screen p-3 shadow-lg shadow-black md:p-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/feed">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="Logo Click"
              className="h-8 w-8 md:h-12 md:w-12"
            />
          </Link>
          <p className="md:hidden">{name}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border-none bg-transparent"
            >
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-secondary">
            <DropdownMenuItem
              className="cursor-pointer hover:bg-gray-dark-click hover:text-white focus:bg-gray-dark-click focus:text-white"
              asChild
            >
              <Link href="/perfil">Perfil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer hover:bg-gray-dark-click hover:text-white focus:bg-gray-dark-click focus:text-white"
              asChild
            >
              <Link href="/meus-jobs">Meus Jobs</Link>
            </DropdownMenuItem>
            {role === 'cliente' && (
              <>
                <DropdownMenuItem
                  className="cursor-pointer hover:bg-gray-dark-click hover:text-white focus:bg-gray-dark-click focus:text-white"
                  asChild
                >
                  <Link href="/postar-job">Postar Job</Link>
                </DropdownMenuItem>
              </>
            )}
            {role === 'fotografo' && (
              <>
                <DropdownMenuItem
                  className="cursor-pointer hover:bg-gray-dark-click hover:text-white focus:bg-gray-dark-click focus:text-white"
                  asChild
                >
                  <Link href="/interesses">Jobs de Interesse</Link>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
