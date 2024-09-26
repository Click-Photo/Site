import Image from 'next/image'
import logo from '@/assets/logo.svg'
import shapeLogin from '@/assets/shape-login.png'

export default function Login() {
  return (
    <section className="relative flex flex-col gap-4 w-screen h-screen items-center justify-center">
      <Image
        src={shapeLogin}
        alt="Shape Login"
        className="absolute -left-36 -top-36 w-1/2 -z-10"
      />
      <Image src={logo} alt="Logo Click" />
      <h1 className="text-4xl font-bold uppercase">Click!</h1>
      <form></form>
    </section>
  )
}
