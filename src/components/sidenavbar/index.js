import {
  SideNavBarCont,
  SideNavMainLink,
  NavIcon,
  SideNavHead
} from './styles'
import { useContext } from 'react'
import { MainContext } from 'contexts/mainContext'
import { primaryColor } from 'theme/colors'
import GrouppedMenu from './grouppedmenu'
import CloseIcon from '../icons/close'
import Arrow from 'images/arrow-icon.png'
import SearchWhite from 'images/search-icon-white.png'

const grouppedLinks = [
  {
    title: 'Watched',
    links: [
      {
        title: 'Movies',
        to: '/watched/movies',
      },
      {
        title: 'TV Shows',
        to: '/watched/tv-shows',
      },
    ],
  },
  {
    title: 'Saved',
    links: [
      {
        title: 'Movies',
        to: '/saved/movies',
      },
      {
        title: 'TV Shows',
        to: '/saved/tv-shows',
      },
    ],
  },
]

export default function SideNavBar() {
  const { isOpen, setIsOpen } = useContext(MainContext)

  return (
    <SideNavBarCont className={isOpen ? 'visible' : ''}>
      <SideNavHead>
        <div onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </div>
      </SideNavHead>

      <SideNavMainLink to="/" exact>
        Wesley
        <NavIcon src={Arrow} alt="Arrow icon" />
      </SideNavMainLink>

      <SideNavMainLink bg={primaryColor} to="/discover">
        Discover
        <NavIcon src={SearchWhite} alt="Search icon" />
      </SideNavMainLink>

      {grouppedLinks.map((grouppedLink, index) => <GrouppedMenu {...grouppedLink} key={index} />)}
    </SideNavBarCont>
  )
}
