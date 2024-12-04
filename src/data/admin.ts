export interface Admin {
  id: number
  email: string
  nome: string
  telefone: string
}

export const admin: Admin[] = [
  {
    id: 1,
    email: 'joao.silva@click.com',
    nome: 'João Silva',
    telefone: '(11) 98765-4321',
  },
  {
    id: 2,
    email: 'ana.paula@click.com',
    nome: 'Ana Paula',
    telefone: '(21) 99988-7766',
  },
  {
    id: 3,
    email: 'carlos.santos@click.com',
    nome: 'Carlos Santos',
    telefone: '(31) 99887-6655',
  },
  {
    id: 4,
    email: 'mariana.costa@click.com',
    nome: 'Mariana Costa',
    telefone: '(41) 98765-1234',
  },
]
