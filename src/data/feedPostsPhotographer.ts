import { CardJobFeedProps } from '@/components/CardJobFeed'
import { clients } from './clients'

export const feedPhothographer: CardJobFeedProps[] = [
  {
    id: '1',
    title: 'Job 1',
    date: new Date(2023, 1, 2),
    address: 'Av. 1, 256',
    description:
      'Lorem ipllum dolor sit amet, consectetur adipiscing elit sed diam non proident sed diam non proident sed diam non proident',
    value: 2500,
    amountProporsals: 20,
    client: clients[0],
  },
  {
    id: '2',
    title: 'Job 2',
    date: new Date(2024, 1, 2),
    address: 'Av. 2, 256',
    description:
      'Lorem ipllum dolor sit amet, consectetur adipiscing elit sed diam non proident sed diam non proident sed diam non proident',
    value: 3500,
    amountProporsals: 15,
    client: clients[1],
  },
]
