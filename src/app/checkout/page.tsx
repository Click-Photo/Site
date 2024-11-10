// src/pages/checkout.tsx
'use client'

import { useState } from 'react'
import shapeLogin from '@/assets/shape-login.png'
import Image from 'next/image'
import InputMask from 'react-input-mask'
import { FaArrowLeft } from 'react-icons/fa'

interface CardInfo {
  email: string
  cardNumber: string
  expiration: string
  cvc: string
  cardHolder: string
  country: string
  zip: string
}

export default function Checkout() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    email: '',
    cardNumber: '',
    expiration: '',
    cvc: '',
    cardHolder: '',
    country: 'Estados Unidos',
    zip: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setCardInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardInfo),
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error('Erro ao enviar os dados do cartão:', error)
    }
  }

  return (
    <section className="relative flex h-screen w-screen flex-col items-center justify-center gap-4 px-6">
      <Image
        src={shapeLogin}
        alt="Shape Login"
        className="absolute left-0 top-0 w-1/4 min-w-72"
      />
      <div className="flex h-screen items-center justify-center px-6">
        <div className="flex h-[70%] w-full flex-col rounded-lg shadow-lg lg:flex-row">
          <div className="flex w-full flex-col border-gray-700 p-8 text-white lg:w-[40%] lg:border-r">
            <div className="mb-4 flex items-center gap-4">
              <FaArrowLeft className="cursor-pointer text-2xl text-white" />{' '}
              {/* Seta de voltar */}
              <h1 className="text-4xl font-bold">Click</h1>
            </div>
            <p className="mt-4 text-xl">Nome Fotografo</p>
            <p className="mt-2 text-3xl font-semibold">R$ 0,00</p>
          </div>

          <div className="flex w-full flex-col justify-center rounded-lg bg-[#0f0f0f] p-8 lg:w-[60%]">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Pagar com cartão
            </h2>

            <form onSubmit={handleSubmit} className="mt-7 h-full space-y-4">
              <div>
                <label className="block text-gray-300">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={cardInfo.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="E-mail"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300">Dados do cartão</label>
                <InputMask
                  mask="9999 9999 9999 9999"
                  name="cardNumber"
                  value={cardInfo.cardNumber}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="1234 1234 1234 1234"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <div className="flex-1">
                  <InputMask
                    mask="99/99"
                    name="expiration"
                    value={cardInfo.expiration}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="MM/AA"
                    required
                  />
                </div>
                <div className="flex-1">
                  <InputMask
                    mask="999"
                    name="cvc"
                    value={cardInfo.cvc}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="CVC"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300">
                  Nome do titular do cartão
                </label>
                <input
                  type="text"
                  name="cardHolder"
                  value={cardInfo.cardHolder}
                  onChange={handleChange}
                  className="mb-4 w-full rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Nome completo"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-white py-2 font-bold text-black transition duration-300 hover:bg-gray-200"
              >
                Pagar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
