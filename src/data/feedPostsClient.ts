import { FeedCardClientProps } from '@/components/CardArt'
import { photographers } from './photographers'

export const feedClient: FeedCardClientProps[] = [
  {
    id: '1',
    title: 'Lorem Ipsum',
    photo:
      'https://cdn.pixabay.com/photo/2016/05/10/02/17/girl-1382947_960_720.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adip',
    photographer: photographers[0],
  },
  {
    id: '2',
    title: 'Lorem Ipsum',
    photo:
      'https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adip',
    photographer: photographers[1],
  },
]
