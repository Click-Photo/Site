'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { AuthContextAdmin } from '@/contexts/AuthContextAdmin'
import logo from '@/assets/logo.svg'
import { Button } from './ui/button'

export function SidebarAdmin() {
  const { logout } = useContext(AuthContextAdmin)
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="relative">
      <button
        className="absolute left-6 top-6 z-30 text-white sm:hidden"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <aside
        className={`fixed left-0 top-0 z-20 h-screen w-64 border-r-2 border-white bg-black-click p-4 pl-[20px] pr-[20px] pt-[200px] text-white sm:relative sm:w-64 sm:p-4 sm:pl-[30px] sm:pt-[150px] ${isSidebarOpen ? 'block' : 'hidden sm:block'}`}
      >
        <div className="mb-8 flex items-center justify-center">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Logo Click"
            className="h-12 w-12"
          />
        </div>

        <div className="mb-6 text-center">
          <p className="font-bold">
            ADM: Maria Angela
            {/* ? admin.nome || 'Administrador' */}
          </p>
        </div>

        <nav className="flex flex-col gap-4">
          <Link
            href="/admin/publicacoes"
            className="rounded-lg bg-[#DCDCDC] px-4 py-2 text-center text-black transition-colors hover:bg-gray-600"
          >
            Publicações
          </Link>
          <Link
            href="/admin/administradores"
            className="rounded-lg bg-[#DCDCDC] px-4 py-2 text-center text-black transition-colors hover:bg-gray-600"
          >
            Administradores
          </Link>
          <Link
            href="/admin/clientes"
            className="rounded-lg bg-[#DCDCDC] px-4 py-2 text-center text-black transition-colors hover:bg-gray-600"
          >
            Clientes
          </Link>
          <Link
            href="/admin/fotografos"
            className="rounded-lg bg-[#DCDCDC] px-4 py-2 text-center text-black transition-colors hover:bg-gray-600"
          >
            Fotógrafos
          </Link>
          <Link
            href="/admin/reports"
            className="rounded-lg bg-[#DCDCDC] px-4 py-2 text-center text-black transition-colors hover:bg-gray-600"
          >
            Reports
          </Link>

          <div className="mt-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full border-none bg-[#DCDCDC] px-4 py-2 text-center text-black transition-colors hover:bg-gray-600"
              onClick={() => logout()}
            >
              Sair
            </Button>
          </div>
        </nav>
      </aside>

      <div
        className={`fixed inset-0 bg-black/50 sm:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      ></div>
    </div>
  )
}
