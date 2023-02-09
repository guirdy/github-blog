import { useEffect } from 'react'
import { api } from '../../api/axios'

export function Home() {
  const getGithubUserData = async () => {
    const res = await api.get('guirdy').then(({ data }) => {
      return data
    })

    console.log(res)
  }

  useEffect(() => {
    getGithubUserData()
  }, [])

  return <div>Content Home</div>
}
