import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  margin: 54px auto;
  border-top: 5px solid ${(props) => props.theme.blue};
  border-right: 5px solid ${(props) => props.theme.blue};
  border-bottom: 5px solid ${(props) => props.theme.blue};
  border-left: 4px solid ${(props) => props.theme.white};
  background: transparent;
  width: 54px;
  height: 54px;
  border-radius: 50%;
`
