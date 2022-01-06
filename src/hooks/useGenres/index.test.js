import { renderHook } from '@testing-library/react-hooks'
import { mockFetcher, wait } from 'helpers/tests'
import useGenres from './'

const invalidCallback = () => Promise.reject('invalid api call')
const mockValidCall = () => {
  mockFetcher('fetchGenres', () => {
    const data = {
      genres: [
        { id: 1, name: 'genre' },
        { id: 2, name: 'genre 2' },
      ]
    }

    return new Promise(async (resolve) => {
      await wait(100)

      resolve({ status: 200, data })
    })
  })
}

describe('useGenres hook', () => {
  it('should return isloading state as true', () => {
    mockValidCall()

    const { result } = renderHook(() => useGenres())
    const { isLoading } = result.current

    expect(isLoading).toBe(true)
  })

  it('should fetch from api and set isloading state to false', async () => {
    mockValidCall()

    const { result, waitForNextUpdate } = renderHook(() => useGenres())

    await waitForNextUpdate()
    
    const { genres, isLoading } = result.current

    expect(genres).toEqual(expect.any(Array))
    expect(isLoading).toBe(false)
  })

  it('should return empty genres if api call fails', async () => {
    mockFetcher('fetchGenres', invalidCallback)

    const { result, waitForNextUpdate } = renderHook(() => useGenres())
    
    await waitForNextUpdate()

    const { genres } = result.current
    
    expect(genres).toEqual([ ])
  })

  it('get genre name by existing id', async () => {
    mockValidCall()

    const { result, waitForNextUpdate } = renderHook(() => useGenres())

    await waitForNextUpdate()
    
    const { genres, getGenreById } = result.current
    const { id, name } = genres[0]

    expect(getGenreById(id)).toBe(name)
  })

  it('get genre name by unexisting id should throw error', async () => {
    mockValidCall()
    
    const { result, waitForNextUpdate } = renderHook(() => useGenres())
    
    await waitForNextUpdate()
    
    const { getGenreById } = result.current

    expect(() => getGenreById(3235332)).toThrow()
  })

  it('should throw error when trying to search genre and api call has failed', async () => {
    mockFetcher('fetchGenres', invalidCallback)

    const { result, waitForNextUpdate } = renderHook(() => useGenres())
    
    await waitForNextUpdate()

    const { getGenreById } = result.current

    expect(() => getGenreById(1)).toThrow()
  })
})
