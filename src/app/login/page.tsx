'use client'

import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { FormLogin } from '../components/FormLogin'
import shapeLogin from '@/assets/shape-login.png'
import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function Login() {
  const { token, user } = useContext(AuthContext)

  const router = useRouter()

  if (token || user) {
    if (user?.role === 'cliente') {
      return router.push('/feed')
    } else if (user?.role === 'fotografo') {
      return router.push('/jobs')
    } else {
      return router.push('/admin')
    }
  }

  return (
    <section className="relative flex h-screen w-screen flex-col items-center justify-center gap-4 px-6">
      <Image
        src={shapeLogin}
        alt="Shape Login"
        className="absolute left-0 top-0 w-1/4 min-w-72"
      />
      <Image src={logo} alt="Logo Click" />
      <h1 className="text-4xl font-bold uppercase">Click!</h1>
      <FormLogin />
    </section>
  )
}
