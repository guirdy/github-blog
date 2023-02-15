import { createContext, useState, useEffect, ReactNode } from 'react'
import { IGithubIssue, IGithubProfile } from '../interfaces/IGithub'

import { api } from '../api/axios'

interface GithubProfileProps {
  children: ReactNode
}

interface IGithubContext {
  githubUser: IGithubProfile
  githubIssue: IGithubIssue[]
}

export const GithubContext = createContext({} as IGithubContext)

export function GithubProvider({ children }: GithubProfileProps) {
  const [githubUser, setGithubUser] = useState({} as IGithubProfile)
  const [githubIssue, setGithubIssue] = useState([] as IGithubIssue[])

  const getGithubUserData = async () => {
    const res = await api
      .get<IGithubProfile>('users/diego3g')
      .then(({ data }) => {
        return data
      })

    setGithubUser(res)
  }

  const getGithubRepositoryIssue = async () => {
    const res = await api
      .get<IGithubIssue[]>('repos/diego3g/faladev/issues')
      .then(({ data }) => {
        return data
      })

    setGithubIssue(res)
  }

  useEffect(() => {
    getGithubUserData()
    getGithubRepositoryIssue()
  }, [])

  return (
    <GithubContext.Provider value={{ githubUser, githubIssue }}>
      {children}
    </GithubContext.Provider>
  )
}
