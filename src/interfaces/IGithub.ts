export interface IGithubProfile {
  id: number
  name: string
  email: null
  html_url: string
  bio: string
  login: string
  company: string | null
  type: string
  avatar_url: string
  created_at: string
  updated_at: string
  followers: number
  followers_url: string
  following: number
  following_url: string
  public_gists: number
  public_repos: number
}

export interface IGithubIssue {
  title: string
  body: string
  html_url: string
  user: IGithubProfile
}
