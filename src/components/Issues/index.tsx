import { useContext, useState } from 'react'
import { GithubContext } from '../../context/UserContext'
import { SearchFormContainer } from './styles'

export function Issues() {
  const githubContext = useContext(GithubContext)

  const [inputValue, setInputValue] = useState('')

  const filteredIssues = githubContext.githubIssue.filter((issue) => {
    return issue.title.toLowerCase().includes(inputValue.toLowerCase())
  })

  return (
    <>
      <SearchFormContainer onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </SearchFormContainer>

      <ul>
        {filteredIssues.map((issue) => (
          <li key={issue.title}>{issue.title}</li>
        ))}
      </ul>
    </>
  )
}
