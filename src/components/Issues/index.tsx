import { useContext, useState } from 'react'
import { GithubContext } from '../../context/UserContext'
import { publishedDateRelativeToNow } from '../../utils/Date'
import {
  CardHeader,
  IssuesCard,
  IssuesItems,
  Publishes,
  SearchFormContainer,
} from './styles'

export function Issues() {
  const githubContext = useContext(GithubContext)

  const [inputValue, setInputValue] = useState('')

  const filteredIssues = githubContext.githubIssue.filter((issue) => {
    return issue.title.toLowerCase().includes(inputValue.toLowerCase())
  })

  return (
    <>
      <Publishes>
        <strong>Publicações</strong>
        <span>{githubContext.githubIssue.length} publicações</span>
      </Publishes>
      <SearchFormContainer onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </SearchFormContainer>

      <IssuesItems>
        {filteredIssues.map((issue) => (
          <IssuesCard key={issue.title} to={`${issue.html_url}`}>
            <CardHeader>
              <strong>{issue.title}</strong>
              <span>
                {publishedDateRelativeToNow(new Date(issue.created_at))
                  .split('cerca de')
                  .join()
                  .replaceAll(',', '')}
              </span>
            </CardHeader>
            <p>{issue.body}</p>
          </IssuesCard>
        ))}
      </IssuesItems>
    </>
  )
}
