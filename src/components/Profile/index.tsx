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
  const githubUser = useContext(GithubContext)
  console.log(githubUser)

  return (
    <Card>
      <img src={githubUser.avatar_url} alt="github user" />
      <UserContainer>
        <HeaderContainer>
          <h1>{githubUser.name}</h1>
          <a
            href={githubUser.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <FaExternalLinkAlt />
          </a>
        </HeaderContainer>
        <BodyContainer>
          <p>{githubUser.bio}</p>
        </BodyContainer>
        <Social>
          <IconContent>
            <FaGithub />
            <span>{githubUser.login}</span>
          </IconContent>
          {githubUser.company && (
            <IconContent>
              <FaBuilding />
              <span>{githubUser.company}</span>
            </IconContent>
          )}
          <IconContent>
            <FaUserFriends />
            <span>{githubUser.followers} seguidores</span>
          </IconContent>
        </Social>
      </UserContainer>
    </Card>
  )
}
