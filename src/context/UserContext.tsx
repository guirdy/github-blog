import { createContext, useState, useEffect, ReactNode } from 'react'
import { IGithubProfile } from '../interfaces/IGithub'

import { api } from '../api/axios'

interface GithubProfileProps {
  children: ReactNode
}

export const GithubContext = createContext({} as IGithubProfile)

export function GithubProvider({ children }: GithubProfileProps) {
  const [githubUser, setGithubUser] = useState({} as IGithubProfile)

  const getGithubUserData = async () => {
    const res = await api.get<IGithubProfile>('guirdy').then(({ data }) => {
      return data
    })

    setGithubUser(res)
  }

  useEffect(() => {
    getGithubUserData()
  }, [])

  return (
    <GithubContext.Provider value={githubUser}>
      {children}
    </GithubContext.Provider>
  )
}
