import { createContext, useState } from 'react'
import { breakPoints } from 'theme/sizes'
import { getTitleByPath } from 'routes'
import usePageTitle from 'hooks/usePageTitle'
import useHandleLocation from 'hooks/useHandleLocation'

const MainContext = createContext({
  isOpen: false,
  setIsOpen: () => { },
  title: ''
})

const isNavBarOpened = window.innerWidth > breakPoints.large

const MainContextProvider = ({ children }) => {
  const [ isOpen, setIsOpen ] = useState(isNavBarOpened)
  const { title, setTitle } = usePageTitle('Main')

  useHandleLocation(({ pathname }) => {
    const title = getTitleByPath(pathname)
    
    setTitle(title)
    setIsOpen(false)
  })

  return (
    <MainContext.Provider value={{ isOpen, setIsOpen, title }}>
      {children}
    </MainContext.Provider>
  )
}

export { MainContext, MainContextProvider }
