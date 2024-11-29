import { Photographer, photographers } from './photographers'

export interface Proporsal {
  id: string
  date: Date
  value: number
  photographer: Photographer
}

export const proporsalsJob1: Proporsal[] = [
  {
    id: '1',
    date: new Date(),
    value: 4000,
    photographer: photographers[0],
  },
  {
    id: '2',
    date: new Date(),
    value: 4250,
    photographer: photographers[1],
  },
]

export const proporsalsJob2: Proporsal[] = [
  {
    id: '3',
    date: new Date(),
    value: 5000,
    photographer: photographers[0],
  },
  {
    id: '4',
    date: new Date(),
    value: 5250,
    photographer: photographers[2],
  },
]

export const proporsalsJob3: Proporsal[] = [
  {
    id: '5',
    date: new Date(),
    value: 6000,
    photographer: photographers[0],
  },
  {
    id: '6',
    date: new Date(),
    value: 6250,
    photographer: photographers[3],
  },
]
