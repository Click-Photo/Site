export interface Photographer {
  id: string
  photo: string
  name: string
}

export const photographers: Photographer[] = [
  {
    id: '1',
    name: 'Carolina',
    photo:
      'https://cdn.pixabay.com/photo/2022/04/30/14/04/woman-7165664_960_720.jpg',
  },
  {
    id: '2',
    name: 'Júlia',
    photo:
      'https://cdn.pixabay.com/photo/2023/09/26/17/32/woman-8277925_1280.jpg',
  },
  {
    id: '3',
    name: 'Cris',
    photo:
      'https://cdn.pixabay.com/photo/2019/01/21/17/45/woman-3946473_960_720.jpg',
  },
  {
    id: '4',
    name: 'Amanda',
    photo:
      'https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_960_720.jpg',
  },
]
