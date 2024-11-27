'use client'

import { createContext, ReactNode, useContext } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

export interface AuthContextType {
  id: string
  role: 'admin' | 'fotografo' | 'cliente'
}

const defaultUser: AuthContextType = {
  id: 'cd1b197d-e7f2-4ae1-a95a-7b44ce3f189a',
  role: 'fotografo',
}

export const AuthContext = createContext(defaultUser as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const { id, role } = useContext(AuthContext)

  return (
    <AuthContext.Provider value={{ id, role }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const { id, role } = useContext(AuthContext)

  return {
    id,
    role,
  }
}
