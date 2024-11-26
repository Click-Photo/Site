import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.svg'
import { NavbarMobile } from './NavbarMobile'
import { Navbar } from './Navbar'

export function HeaderHome() {
  return (
    <header className="min-h-screen w-full p-3 md:p-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          <Image
            width={1280}
            height={1280}
            src={logo}
            alt="Logo Click"
            className="h-10 w-10 md:h-14 md:w-14"
          />
        </Link>
        <NavbarMobile />
        <Navbar />
      </nav>
    </header>
  )
}
