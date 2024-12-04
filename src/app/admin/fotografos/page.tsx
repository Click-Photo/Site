import { SidebarAdmin } from '@/components/AdminSideBar'
import { ListagemADM } from '@/components/listagemadmin'
export default function Fotografos() {
  const mockFotografos = [
    {
      id: '1',
      name: 'Edgar',
      email: 'edgar@email.com',
      phone: '11111-2222',
    },
    {
      id: '2',
      name: 'Scarlet',
      email: 'scarlet@email.com',
      phone: '33333-4444',
    },
  ]

  return (
    <div className="flex h-screen bg-black-click text-white">
      <SidebarAdmin />
      <ListagemADM title="Fotógrafos" users={mockFotografos} />
    </div>
  )
}
