import {
  SideNavHeader,
  SideNavLinks,
  NavLink
} from './styles'

export default function GrouppedMenu({ title, links }) {
  return (
    <>
      <SideNavHeader>{title}</SideNavHeader>
      
      <SideNavLinks>
        {links.map((link, index) => <NavLink to={link.to} key={index}>{link.title}</NavLink>)}
      </SideNavLinks>
    </>
  )
}
