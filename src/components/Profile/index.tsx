import { useContext } from 'react'
import { GithubContext } from '../../context/UserContext'

import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa'

import {
  BodyContainer,
  Card,
  HeaderContainer,
  IconContent,
  Social,
  UserContainer,
} from './styles'

export function Profile() {
  const githubContext = useContext(GithubContext)

  return (
    <Card>
      <img src={githubContext.githubUser.avatar_url} alt="github user" />
      <UserContainer>
        <HeaderContainer>
          <h1>{githubContext.githubUser.name}</h1>
          <a
            href={githubContext.githubUser.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <FaExternalLinkAlt />
          </a>
        </HeaderContainer>
        <BodyContainer>
          <p>{githubContext.githubUser.bio}</p>
        </BodyContainer>
        <Social>
          <IconContent>
            <FaGithub />
            <span>{githubContext.githubUser.login}</span>
          </IconContent>
          {githubContext.githubUser.company && (
            <IconContent>
              <FaBuilding />
              <span>{githubContext.githubUser.company}</span>
            </IconContent>
          )}
          <IconContent>
            <FaUserFriends />
            <span>{githubContext.githubUser.followers} seguidores</span>
          </IconContent>
        </Social>
      </UserContainer>
    </Card>
  )
}
