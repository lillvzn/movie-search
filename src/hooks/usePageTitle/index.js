import { useEffect, useState } from 'react'

export default function usePageTitle(initialTitle) {
  const [ title, setTitle ] = useState(initialTitle)
  const { REACT_APP_TITLE } = process.env

  useEffect(() => {
    document.title = `${REACT_APP_TITLE} - ${title}`
  }, [ title, REACT_APP_TITLE ])

  return { title, setTitle }
}
