'use client'

import { useRouter } from 'next/navigation'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()

  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center gap-8 p-10 md:flex-row">
      <Image
        width={1000}
        height={1000}
        src={logo}
        alt="Logo Click"
        className="h-40 w-40"
      />
      <div>
        <h1 className="font-secondary text-xl font-bold">
          Página não encontrada
        </h1>
        <p className="mt-4 text-base">
          A página que você está tentando acessar não existe ou foi movida para
          outro endereço.
        </p>
        <button
          className="mt-8 flex items-center gap-2 text-sm"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-6 w-6" />
          Voltar para a página anterior
        </button>
      </div>
    </section>
  )
}
