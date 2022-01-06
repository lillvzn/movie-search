import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { sideNavBar } from 'theme/colors'
import { sideNavBarWidth, breakPoints } from 'theme/sizes'

export const SideNavBarCont = styled.div`
  background-color: ${sideNavBar};
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  height: 100%;
  padding: 10px 0;
  width: ${sideNavBarWidth}px;
  overflow: hidden;

  @media (max-width: ${breakPoints.large - 1}px) {
    width: 0;
    transition: width .5s;
    
    &.visible {
      width: 100%;
    }
  }
`

export const NavIcon = styled.img`
  max-width: 100%;
  height: auto;
`

export const SideNavHead = styled.div`
  display: block;
  margin: 0 0 0 auto;
  padding: 10px 35px 0 35px;

  @media (min-width: ${breakPoints.large}px) {
    display: none;
  }
`

export const SideNavMainLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 1.6em;
  padding: 25px 35px;

  ${props => props.bg && css`
    background-color: ${props.bg};
  `}
`
