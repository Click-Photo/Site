import { CardJobFeedProps } from '@/components/CardJobFeed'
import { clients } from './clients'

interface JobsInterests extends CardJobFeedProps {}

export const jobsInterests: JobsInterests[] = [
  {
    id: '3',
    title: 'Job 3',
    date: new Date(2023, 1, 2),
    address: 'Av. 3, 256',
    description:
      'Lorem ipllum dolor sit amet, consectetur adipiscing elit sed diam non proident sed diam non proident sed diam non proident',
    value: 2500,
    amountProporsals: 20,
    client: clients[0],
  },
  {
    id: '4',
    title: 'Job 4',
    date: new Date(2024, 1, 2),
    address: 'Av. 4, 256',
    description:
      'Lorem ipllum dolor sit amet, consectetur adipiscing elit sed diam non proident sed diam non proident sed diam non proident',
    value: 3500,
    amountProporsals: 15,
    client: clients[1],
  },
]
