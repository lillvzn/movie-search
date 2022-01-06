import styled from 'styled-components'
import { contentPaddingX, breakPoints } from 'theme/sizes'

export const Wrapper = styled.main`
  padding: 0 25px;
  display: grid;
  grid-column: 2;
  grid-row: 1;
  grid-auto-flow: row;
  grid-template-columns: 1fr auto;

  @media (min-width: ${breakPoints.large}px) {
    padding: 60px ${contentPaddingX}px;
  }

  @media (min-width: ${breakPoints.medium}px) {
    gap: 15px;
    padding: 60px 25px;
    grid-auto-flow: column;
  }
`

export const TotalCounter = styled.div`
  font-weight: lighter;
  padding-bottom: 15px;
`

export const MovieResults = styled.div`
  grid-column-start: 1;
  
  & h1 {
    margin-top: 35px;
  }
`

export const MovieFilters = styled.div`

`
