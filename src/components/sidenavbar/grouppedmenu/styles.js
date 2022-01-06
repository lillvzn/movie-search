import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { fontColor } from 'theme/colors'

export const SideNavHeader = styled.div`
  padding: 25px 35px 25px 0;
  font-size: 1.6em;
  margin-left: 35px;
  border-bottom: 1px solid ${fontColor};
  color: #fff;
`

export const SideNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px 35px;
`

export const NavLink = styled(Link)`
  color: #fff;
  font-weight: lighter;
`
