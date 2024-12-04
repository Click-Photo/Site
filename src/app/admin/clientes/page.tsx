import { SidebarAdmin } from '@/components/AdminSideBar'
import { ListagemADM } from '@/components/listagemadmin'

export default function Clientes() {
  const mockClientes = [
    {
      id: '1',
      name: 'maria joana',
      email: 'maria@email.com',
      phone: '12345-6789',
    },
    {
      id: '2',
      name: 'maria joaquina',
      email: 'joaquina@email.com',
      phone: '98765-4321',
    },
  ]

  return (
    <div className="flex h-screen bg-black-click text-white">
      <SidebarAdmin />
      <ListagemADM title="Clientes" users={mockClientes} />
    </div>
  )
}
