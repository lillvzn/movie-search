import { useContext } from 'react'
import { MainContext } from 'contexts/mainContext'
import { PageTitle } from './styles'
import HamburgerIcon from 'components/icons/hamburguer'

export default function MobilePageTitle() {
  const { title, setIsOpen } = useContext(MainContext)

  return (
    <PageTitle>
      <div onClick={() => setIsOpen(true)}>
        <HamburgerIcon />
      </div>

      {title}
    </PageTitle>
  )
}