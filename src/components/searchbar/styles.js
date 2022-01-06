import styled, { css } from 'styled-components'
import { primaryColor } from 'theme/colors'
import { contentPaddingX } from 'theme/sizes'

export const Input = styled.input`
  color: ${primaryColor};
  display: block;
  border-width: 0;
  border-bottom: 2px solid;
  outline: none;
  font-size: 1em;
  padding: 10px 0 10px ${props => props.icon ? contentPaddingX : 0}px;
  width: -webkit-fill-available;
  border-radius: 0;

  ${props => props.icon && css`
    background: url(${props.icon});
    background-repeat: no-repeat;
    background-position: 0 50%;
  `}
  
  ${props => props.marginBottom && css`
    margin: 10px 0;
  `}

  &::placeholder {
    font-weight: lighter;
    color: ${primaryColor};
  }
`
