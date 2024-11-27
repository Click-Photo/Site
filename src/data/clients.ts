export interface Client {
  id: string
  photo: string
  name: string
}

export const clients: Client[] = [
  {
    id: '1',
    name: 'Cláudia',
    photo:
      'https://cdn.pixabay.com/photo/2024/11/05/20/59/artistic-9176859_960_720.jpg',
  },
  {
    id: '2',
    name: 'José',
    photo:
      'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg',
  },
]
