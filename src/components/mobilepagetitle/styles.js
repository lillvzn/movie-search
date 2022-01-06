import styled from 'styled-components'
import { breakPoints } from 'theme/sizes'

export const PageTitle = styled.header`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 2em;
  line-height: 0;
  padding: 20px 25px;

  @media (min-width: ${breakPoints.large}px) {
    display: none;
  }
`
