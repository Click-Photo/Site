import Link from 'next/link'

export function Navbar() {
  return (
    <div className="hidden items-center gap-8 font-secondary md:flex">
      <Link href="/login" className="hover:underline">
        Login
      </Link>
      <Link href="/cadastro" className="hover:underline">
        Cadastro
      </Link>
    </div>
  )
}
