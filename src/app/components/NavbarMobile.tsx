import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { AlignJustify, UserRound, UserRoundPlus } from 'lucide-react'
import Link from 'next/link'

export function NavbarMobile() {
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden" asChild>
        <Button variant="outline" size="icon" className="bg-transparent">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="flex w-screen flex-col justify-between border-none bg-gray-dark-click font-secondary"
        side="left"
      >
        <SheetHeader className="items-center gap-16 space-y-0 pt-8">
          <SheetTitle className="text-white" asChild>
            <Image
              width={1280}
              height={1280}
              className="h-20 w-20"
              src={logo}
              alt="Logo Click"
            />
          </SheetTitle>
          <SheetDescription
            className="flex flex-col items-center gap-8 text-base text-gray-light-click"
            asChild
          >
            <div>
              <Link href="/login" className="flex items-center gap-2">
                <UserRound />
                Login
              </Link>
              <Link href="/login" className="flex items-center gap-2">
                <UserRoundPlus />
                Cadastrar
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="items-center text-gray-light-click/30">
          <span>&#169; 2024 | Click</span>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
