import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  line-height: 1;
  padding: 5px 0;
  cursor: pointer;
`

export const CollapseIcon = styled.div`
  font-size: 1.6em;
`

export const Options = styled.div`
  overflow: hidden;
  display: grid;
  gap: 10px;
  padding: 15px 0;
  max-height: 100vh;
  transition: max-height .5s ease-in-out, padding .8s ease-in-out;

  &.collapsed {
    padding: 0;
    max-height: 0;
  }
`
