import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 1rem;
    margin-bottom: 48px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const Publishes = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 15px;

  strong {
    display: block;
    font-size: 1.125rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    display: block;
    font-size: 0.875rem;
    line-height: 160%;
    text-align: right;
    color: ${(props) => props.theme['base-span']};
  }
`

export const IssuesItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 234px;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`

export const IssuesCard = styled(Link)`
  width: 100%;
  padding: 32px;
  height: 260px;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;

  > p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};

    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 4; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  &:focus {
    box-shadow: none;
  }

  @media (max-width: 915px) {
    max-width: 100%;
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 6px;

  > strong {
    display: block;
    margin-top: -5px;
    font-size: 1.25rem;
    line-height: 160%;
    flex: 1;
    color: ${(props) => props.theme['base-title']};
  }

  > span {
    display: block;
    font-size: 0.875rem;
    line-height: 160%;
    text-align: right;
    color: ${(props) => props.theme['base-span']};
  }
`
