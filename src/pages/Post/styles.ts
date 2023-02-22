import styled from 'styled-components'

export const IssueHeader = styled.div`
  margin: -80px auto 72px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 32px 40px;
  gap: 32px;

  > h1 {
    font-size: 1.5rem;
    line-height: 130%;
    margin-top: 20px;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Navigate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  flex-wrap: wrap;

  > h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  > a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const GithubUserData = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8px;
  gap: 24px;
`

export const IconContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > svg {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const IssueBody = styled.div`
  margin-bottom: 128px;

  li {
    margin-left: 35px;
  }
`
