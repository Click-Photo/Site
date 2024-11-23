import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { Button } from '@/components/Button'
import { Play } from 'lucide-react'

export default function Home() {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <Image src={logo} alt="Logo Click" />
      <h1 className="text-4xl font-bold">Hello Click!</h1>
      <Button className="bg-white font-secondary text-black hover:bg-neutral-300">
        <span className="">Começar</span>
        <Play color="black" fill="black" />
      </Button>
    </section>
  )
}
