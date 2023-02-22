// import { ptBR } from 'date-fns/locale'
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  FaAngleLeft,
  FaCalendarDay,
  FaCommentAlt,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { GithubContext } from '../../context/UserContext'
import { publishedDateRelativeToNow } from '../../utils/Date'
import {
  IssueHeader,
  IssueBody,
  Navigate,
  IconContent,
  GithubUserData,
} from './styles'
import Loading from '../../components/Loading'

export function Post() {
  const githubContext = useContext(GithubContext)

  const { issueNumber } = useParams()
  // const navigate = useNavigate()

  const currentIssue = githubContext.githubIssue.find(
    (issue) => issue.number === Number(issueNumber),
  )

  if (!currentIssue || !githubContext.githubUser) {
    return <Loading />
  }

  return (
    <>
      <IssueHeader>
        <Navigate>
          <Link to="/">
            <FaAngleLeft /> Voltar
          </Link>
          <a
            href={currentIssue.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no Github <FaExternalLinkAlt />
          </a>
        </Navigate>

        <h1>{currentIssue.title}</h1>

        <GithubUserData>
          <IconContent>
            <FaGithub />
            <span>{githubContext.githubUser.login}</span>
          </IconContent>
          <IconContent>
            <FaCalendarDay />
            <span>
              {publishedDateRelativeToNow(new Date(currentIssue.created_at))
                .split('cerca de')
                .join()
                .replaceAll(',', '')}
            </span>
          </IconContent>
          <IconContent>
            <FaCommentAlt />
            <span>
              {`${currentIssue.comments} ${
                currentIssue.comments > 1 || currentIssue.comments === 0
                  ? 'comentários'
                  : 'comentário'
              }`}
            </span>
          </IconContent>
        </GithubUserData>
      </IssueHeader>
      <IssueBody>
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => (
              <p
                style={{
                  color: '#AFC2D4',
                  fontWeight: 400,
                  lineHeight: '25.6px',
                  margin: '15px 0',
                  textAlign: 'justify',
                }}
                {...props}
              />
            ),
            img: ({ node, ...props }) => (
              <img
                {...props}
                style={{ width: '100%', marginTop: '15px' }}
                alt=""
              />
            ),
            a: ({ node, ...props }) => (
              <a {...props} style={{ color: '#3294F8', fontWeight: 'bold' }} />
            ),
            h3: ({ node, ...props }) => (
              <h3 {...props} style={{ color: '#E7EDF4' }} />
            ),
            h2: ({ node, ...props }) => (
              <h2 {...props} style={{ color: '#E7EDF4' }} />
            ),
            h1: ({ node, ...props }) => (
              <h1 {...props} style={{ color: '#E7EDF4' }} />
            ),
          }}
        >
          {currentIssue.body}
        </ReactMarkdown>
      </IssueBody>
    </>
  )
}
