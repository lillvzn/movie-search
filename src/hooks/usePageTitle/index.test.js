import { renderHook, act } from '@testing-library/react-hooks'
import usePageTitle from './'

const { REACT_APP_TITLE } = process.env
const title = 'Main'

let hook = null

describe('usePageTitle hook', () => {
  beforeEach(() => {
    const { result } = renderHook(() => usePageTitle(title))

    hook = result
  })

  it('should change document title with configured app title appended', () => {
    expect(document.title).toBe(`${REACT_APP_TITLE} - ${title}`)
  })

  it('should store title without configured app title appended', () => {
    const newTitle = 'New title'

    act(() => hook.current.setTitle(newTitle))
    
    expect(hook.current.title).toBe(newTitle)
  })

  it('changes document title when title is updated', () => {
    const newTitle = 'New title'

    act(() => hook.current.setTitle(newTitle))
    
    expect(document.title).toBe(`${REACT_APP_TITLE} - ${newTitle}`)
  })
})
