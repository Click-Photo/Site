'use client'

import { createContext, ReactNode, useEffect, useState } from 'react'
import { UserToken } from '@/@types/UserToken'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextType {
  user: UserToken | null
  token: string | null
  createUser: (user: UserToken | null) => void
  createToken: (token: string | null) => void
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<UserToken | null>(null)

  // Restaurar dados do localStorage na inicialização
  useEffect(() => {
    const storedToken = sessionStorage.getItem('authToken')
    const storedUser = sessionStorage.getItem('authUser')

    if (storedToken) setToken(storedToken)
    if (storedUser) setUser(JSON.parse(storedUser))
  }, [])

  function createToken(token: string | null) {
    setToken(token)
    if (token) {
      sessionStorage.setItem('authToken', token)
    } else {
      sessionStorage.removeItem('authToken')
    }
  }

  function createUser(user: UserToken | null) {
    setUser(user)
    if (user) {
      sessionStorage.setItem('authUser', JSON.stringify(user))
    } else {
      sessionStorage.removeItem('authUser')
    }
  }

  function logout() {
    createToken(null)
    createUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, createUser, token, createToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
