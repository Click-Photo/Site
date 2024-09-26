import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { Button } from '@/components/Button'
import { Play } from 'lucide-react'

export default function Home() {
  return (
    <section className="flex flex-col gap-4 w-screen h-screen items-center justify-center">
      <Image src={logo} alt="Logo Click" />
      <h1 className="text-4xl font-bold">Hello Click!</h1>
      <Button className="bg-white hover:bg-neutral-300 text-black font-secondary">
        <span className="">Começar</span>
        <Play color="black" fill="black" />
      </Button>
    </section>
  )
}
