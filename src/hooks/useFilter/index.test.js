import { renderHook, act } from '@testing-library/react-hooks'
import { mockFetcher, wait } from 'helpers/tests'
import { fetchMovies } from 'fetcher'
import useFilter from './'

const mockedMovies = {
  results: [
    { name: 'movie', rating: 5 },
    { name: 'movie_2', rating: 2 },
  ],
  total_results: 2,
}

const validCallback = () => Promise.resolve({ data: mockedMovies })
const invalidCallback = () => Promise.reject('invalid api call')

describe('useFilter hook', () => {
  it('should return isloading as false, result as empty array and total as -1', async () => {
    const { result } = renderHook(() => useFilter())
    const { movies, isLoading } = result.current

    expect(isLoading).toBe(false)
    expect(movies).toEqual(expect.any(Object))
    expect(movies.result).toEqual([ ])
    expect(movies.total).toBe(-1)
  })

  it('empty keyword should return result as empty array and total as -1', async () => {
    mockFetcher('fetchMovies', invalidCallback)

    const { result } = renderHook(() => useFilter())
    const { setKeyword } = result.current

    act(() => { setKeyword('') })

    await wait(500)

    const { movies } = result.current

    expect(fetchMovies).not.toHaveBeenCalled()
    expect(movies).toEqual(expect.any(Object))
    expect(movies.result).toEqual([ ])
    expect(movies.total).toBe(-1)
  })

  it('should fetch from api and set isloading state to false', async () => {
    mockFetcher('fetchMovies', () => {
      return new Promise(async (resolve) => {
        await wait(100)

        resolve({ status: 200, data: mockedMovies })
      })
    })

    const { result, waitForNextUpdate } = renderHook(() => useFilter())
    const { setKeyword } = result.current

    act(() => { setKeyword('movie') })
    
    await waitForNextUpdate()

    expect(result.current.isLoading).toBe(true)

    await waitForNextUpdate()
    
    const { movies, isLoading } = result.current

    expect(movies.result).toEqual(expect.any(Array))
    expect(movies.total).toEqual(expect.any(Number))
    expect(movies.total).not.toBe(-1)
    expect(isLoading).toBe(false)
  })

  it('previous searches should be taken from cache', async () => {
    mockFetcher('fetchMovies', validCallback)

    const { result, waitForNextUpdate } = renderHook(() => useFilter())
    const { setKeyword } = result.current
    const keyword = 'movie'

    act(() => { setKeyword(keyword) })
    
    await waitForNextUpdate()
    
    const { movies: firstCallMovies } = result.current

    expect(firstCallMovies).toEqual(expect.any(Object))
    expect(firstCallMovies.result).toEqual(mockedMovies.results)
    expect(firstCallMovies.total).toBe(mockedMovies.total_results)

    act(() => { setKeyword('') })
    act(() => { setKeyword(keyword) })

    await waitForNextUpdate()

    const { movies: secondCallMovies } = result.current
    
    expect(secondCallMovies).toEqual(expect.any(Object))
    expect(secondCallMovies.result).toEqual(firstCallMovies.result)
    expect(secondCallMovies.total).toBe(firstCallMovies.total)

    expect(fetchMovies).toHaveBeenCalledTimes(1)
  })

  it('should return result as empty array and total as -1 if api call fails', async () => {
    mockFetcher('fetchMovies', invalidCallback)

    const { result, waitForNextUpdate } = renderHook(() => useFilter())
    const { setKeyword } = result.current
    
    act(() => { setKeyword('test') })

    await waitForNextUpdate()

    const { movies } = result.current

    expect(movies.result).toEqual([ ])
    expect(movies.total).toBe(-1)
  })
})
