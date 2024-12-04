'use client'

import { SidebarAdmin } from '@/components/AdminSideBar'
import Image from 'next/image'
import Link from 'next/link'

export default function ReportsPage() {
  return (
    <div className="flex">
      <SidebarAdmin />

      <div className="flex w-full flex-col gap-6 p-8 pl-[600px] pr-[600px] pt-[180px]">
        <Link
          href="/admin/reports/reportsclientes"
          className="flex h-[80px] w-[400px] items-center justify-center gap-4 rounded-md bg-gray-300 text-black transition hover:bg-gray-400"
        >
          <Image
            src="/admin/sinal-de-aviso.png"
            alt="Ícone de Aviso"
            width={40}
            height={40}
          />
          <span className="text-lg font-medium">Reports Clientes</span>
        </Link>

        <Link
          href="/admin/reports/reportsfotografos"
          className="flex h-[80px] w-[400px] items-center justify-center gap-4 rounded-md bg-gray-300 text-black transition hover:bg-gray-400"
        >
          <Image
            src="/admin/sinal-de-aviso.png"
            alt="Ícone de Aviso"
            width={40}
            height={40}
          />
          <span className="text-lg font-medium">Reports Fotógrafos</span>
        </Link>

        <Link
          href="/admin/reports/reportjobs"
          className="flex h-[80px] w-[400px] items-center justify-center gap-4 rounded-md bg-gray-300 text-black transition hover:bg-gray-400"
        >
          <Image
            src="/admin/sinal-de-aviso.png"
            alt="Ícone de Aviso"
            width={40}
            height={40}
          />
          <span className="text-lg font-medium">Reports Jobs</span>
        </Link>

        <Link
          href="/admin/reports/reportsart"
          className="flex h-[80px] w-[400px] items-center justify-center gap-4 rounded-md bg-gray-300 text-black transition hover:bg-gray-400"
        >
          <Image
            src="/admin/sinal-de-aviso.png"
            alt="Ícone de Aviso"
            width={40}
            height={40}
          />
          <span className="text-lg font-medium">Reports Artes</span>
        </Link>
      </div>
    </div>
  )
}
