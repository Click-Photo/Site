'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SidebarAdmin } from '@/components/AdminSideBar'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

export default function AdminPage() {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState)
  }

  return (
    <div className="flex">
      <SidebarAdmin />

      <div className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between pl-[200px] pt-[125px]">
          <h2 className="text-xl font-semibold text-white">ADMINISTRADORES</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 pl-[200px] pr-[200px] sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg bg-[#DCDCDC] p-6">
            <Image
              src="/admin/pessoa.png"
              alt="Admin Icon"
              width={48}
              height={48}
            />
            <div className="mt-4 text-black">Dahlia</div>
            <div className="text-sm text-black">ADM</div>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-[#DCDCDC] p-6">
            <Image
              src="/admin/pessoa.png"
              alt="Admin Icon"
              width={48}
              height={48}
            />
            <div className="mt-4 text-black">Carlos</div>
            <div className="text-sm text-black">Supervisor</div>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-[#DCDCDC] p-6">
            <Image
              src="/admin/pessoa.png"
              alt="Admin Icon"
              width={48}
              height={48}
            />
            <div className="mt-4 text-black">Ana</div>
            <div className="text-sm text-black">CEO</div>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-[#DCDCDC] p-6">
            <Image
              src="/admin/administradores/pessoa.png"
              alt="Admin Icon"
              width={48}
              height={48}
            />
            <div className="mt-4 text-black">Mario</div>
            <div className="text-sm text-black">RH</div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            className="w-[250px] rounded-lg bg-[#1E1E1E] px-4 py-2 text-white transition-colors hover:bg-gray-600"
            onClick={toggleModal}
          >
            Adicionar
          </Button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="w-[90%] rounded-lg bg-[#DCDCDC] px-6 py-6 sm:w-1/3">
              <h3 className="mb-4 text-center text-lg font-semibold text-black">
                Adicionar Administrador
              </h3>

              <div className="flex flex-col items-center">
                <div className="mb-4 w-full max-w-sm">
                  <label className="mb-2 block text-black">Nome</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nome do administrador"
                    className="w-full"
                  />
                </div>

                <div className="mb-4 w-full max-w-sm">
                  <label className="mb-2 block text-black">Cargo</label>
                  <Input
                    id="cargo"
                    type="text"
                    placeholder="Cargo do administrador"
                    className="w-full"
                  />
                </div>

                <div className="mb-4 w-full max-w-sm">
                  <label className="mb-2 block text-black">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email do administrador"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  onClick={toggleModal}
                  className="w-[120px] rounded-lg bg-[#1E1E1E] px-4 py-2 text-white transition-colors hover:bg-gray-600"
                >
                  Cancelar
                </Button>
                <Button className="w-[120px] rounded-lg bg-[#1E1E1E] px-4 py-2 text-white transition-colors hover:bg-gray-600">
                  Adicionar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
