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
