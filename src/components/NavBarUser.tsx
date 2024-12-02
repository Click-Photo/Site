'use client'

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
import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

export function NavbarUser() {
  const { user, logout } = useContext(AuthContext)

  return (
    <nav className="w-screen p-3 shadow-lg shadow-black md:p-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/feed">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Logo Click"
            className="h-8 w-8 md:h-12 md:w-12"
          />
        </Link>
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
              <Link href="/feed">Feed</Link>
            </DropdownMenuItem>
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
            {user?.role === 'cliente' && (
              <DropdownMenuItem
                className="cursor-pointer hover:bg-gray-dark-click hover:text-white focus:bg-gray-dark-click focus:text-white"
                asChild
              >
                <Link href="/postar-job">Postar Job</Link>
              </DropdownMenuItem>
            )}
            {user?.role === 'fotografo' && (
              <DropdownMenuItem
                className="cursor-pointer hover:bg-gray-dark-click hover:text-white focus:bg-gray-dark-click focus:text-white"
                asChild
              >
                <Link href="/interesses">Jobs de Interesse</Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem
              className="cursor-pointer text-red-500 hover:bg-red-500 hover:text-white focus:bg-gray-dark-click focus:text-white"
              asChild
            >
              <Link href="/login" onClick={() => logout()}>
                Sair
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
