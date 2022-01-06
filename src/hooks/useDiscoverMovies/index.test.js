import { renderHook } from '@testing-library/react-hooks'
import { mockFetcher } from 'helpers/tests'
import useDiscoverMovies from './'

const invalidCallback = () => Promise.reject('invalid api call')
const mockMovie = (title) => ({
  title,
  poster_path: 'someurl',
  vote_average: 4,
  genre_ids: [ 1, 2 ],
  overview: 'description',
  release_date: '2012-12-12',
})

const mockedMovies = [
  mockMovie('movie'),
  mockMovie('movie 2'),
  mockMovie('movie 3'),
]

describe('useDiscoverMovies hook', () => {
  it('should return isloading state as true', () => {
    const { result } = renderHook(() => useDiscoverMovies())
    const { isLoading } = result.current

    expect(isLoading).toBe(true)
  })

  it('should fetch from api and set isloading state to false', async () => {
    mockFetcher('fetchDiscoverMovies', () => {
      return Promise.resolve({
        status: 200,
        data: {
          results: mockedMovies,
          total_results: mockedMovies.length,
        },
      })
    })

    const { result, waitForNextUpdate } = renderHook(() => useDiscoverMovies())

    await waitForNextUpdate()
    
    const { movies, isLoading } = result.current

    expect(movies.result).toEqual(expect.any(Array))
    expect(movies.total).toEqual(expect.any(Number))
    expect(movies.total).not.toBe(-1)
    expect(isLoading).toBe(false)
  })

  it('should return empty movies if api call fails', async () => {
    mockFetcher('fetchDiscoverMovies', invalidCallback)

    const { result, waitForNextUpdate } = renderHook(() => useDiscoverMovies())
    
    await waitForNextUpdate()

    const { movies } = result.current

    expect(movies.result).toEqual([ ])
    expect(movies.total).toBe(-1)
  })
})
