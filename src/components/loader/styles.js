import styled, { css } from 'styled-components'
import { fontColor, primaryColor } from 'theme/colors'

export const Wrapper = styled.div`
  ${props => props.small ? css`padding: 10px 0;` : css`height: 100vh;`}
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-items: center;
`

export const Spinner = styled.div`
  border: 4px solid ${fontColor};
  width: ${props => props.small ? 24 : 36}px;
  height: ${props => props.small ? 24 : 36}px;
  border-radius: 50%;
  border-left-color: ${primaryColor};
  animation: spin 1s ease infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
