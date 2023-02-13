import styled from 'styled-components'

export const Card = styled.header`
  display: flex;
  justify-content: start;
  margin: -80px auto 72px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 32px 40px;
  gap: 32px;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  @media (max-width: 550px) {
    flex-direction: column;

    > img {
      margin: auto;
    }
  }
`

export const UserContainer = styled.div`
  width: 100%;
`

export const HeaderContainer = styled.div`
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
  }
`

export const BodyContainer = styled.div`
  line-height: 160%;
  font-size: 1rem;
  margin-bottom: 24px;
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
