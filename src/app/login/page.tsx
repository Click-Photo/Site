import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { FormLogin } from '../components/FormLogin'
import shapeLogin from '@/assets/shape-login.png'

export default function Login() {
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
