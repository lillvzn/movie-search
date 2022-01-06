import { renderHook } from '@testing-library/react-hooks'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import useHandleLocation from './'

const history = createBrowserHistory()
const callback = jest.fn()

let changeLocation = null

describe('useHandleLocation hook', () => {
  beforeEach(async () => {
    const wrapper = ({ children }) => {
      return <Router history={history}>{children}</Router>;
    }
    
    const { rerender } = renderHook(() => useHandleLocation(callback), { wrapper })

    changeLocation = (path) => {
      history.push(path)
      rerender()
    }
  })

  it('callback is executed when hook is created', () => {
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('callback is executed when location has changed', () => {
    changeLocation('/home')
    
    expect(callback).toHaveBeenCalledTimes(2)
  })
})