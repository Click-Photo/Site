import Image from 'next/image'
import { NavbarProfile } from './Profile'
import logo from '@/assets/logo.svg'

interface NavbarUserProps {
  name: string
}

export function NavbarUser({ name }: NavbarUserProps) {
  return (
    <nav className="w-screen p-3 shadow-md shadow-gray-dark-click md:p-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Logo Click"
            className="h-8 w-8 md:h-12 md:w-12"
          />
          <p className="md:hidden">{name}</p>
        </div>
        <NavbarProfile />
      </div>
    </nav>
  )
}
