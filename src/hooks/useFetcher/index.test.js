import { renderHook } from '@testing-library/react-hooks'
import { mockValidApiCall } from 'helpers/tests'
import useFetcher from './'
import axios from 'axios'

const callback = () => axios.get('/')
const invalidCallback = () => Promise.reject('invalid api call')

describe('useFetcher hook', () => {
  it('should fetch from api and set isloading state to false', async () => {
    mockValidApiCall()

    const { result, waitForNextUpdate } = renderHook(() => useFetcher(callback))

    expect(result.current.isLoading).toBe(true)

    await waitForNextUpdate()

    const { data, error, isLoading } = result.current

    expect(data).toEqual({ key: 'value' })
    expect(error).toEqual({ })
    expect(isLoading).toBe(false)
  })

  it('should set error state if api call fails', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetcher(invalidCallback))

    expect(result.current.isLoading).toBe(true)

    await waitForNextUpdate()

    const { data, error, isLoading } = result.current

    expect(data).toEqual([ ])
    expect(error).toBe('invalid api call')
    expect(isLoading).toBe(false)
  })
})
