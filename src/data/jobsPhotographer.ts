import { Client, clients } from './clients'

interface JobPhotographer {
  id: string
  title: string
  date: Date
  address: string
  description: string
  amountProporsals: number
  value: number
  client: Client
  status: 'ACEITO' | 'CANCELADO' | 'PENDENTE'
}

export const jobsPhotographer: JobPhotographer[] = [
  {
    id: '1',
    title: 'Job 5',
    date: new Date(2022, 1, 2),
    address: 'Av. 5, 256',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis in lore mauris et sapien',
    amountProporsals: 20,
    value: 4500,
    client: clients[0],
    status: 'PENDENTE',
  },
  {
    id: '2',
    title: 'Job 6',
    date: new Date(2023, 1, 2),
    address: 'Av. 6, 256',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis in lore mauris et sapien',
    amountProporsals: 15,
    value: 5500,
    client: clients[1],
    status: 'ACEITO',
  },
  {
    id: '3',
    title: 'Job 7',
    date: new Date(2024, 1, 2),
    address: 'Av. 7, 256',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis in lore mauris et sapien',
    amountProporsals: 10,
    value: 6500,
    client: clients[1],
    status: 'CANCELADO',
  },
]
