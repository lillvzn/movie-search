import {
  fetchDiscoverMovies,
  fetchGenres,
  fetchMovies,
} from './fetcher'
import { mockInvalidApiCall, mockFetcher } from 'helpers/tests'

const validApiResponse = (data) => ({
  status: 200,
  data,
})

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

const movieResponseStructure = {
  results: expect.any(Array),
  total_results: expect.any(Number),
}

const movieStructure = {
  title: expect.any(String),
  poster_path: expect.any(String),
  vote_average: expect.any(Number),
  genre_ids: expect.any(Array),
  overview: expect.any(String),
  release_date: expect.any(String),
}

describe('Fetcher', () => {
  it('fetchs movies to discover', async () => {
    mockFetcher('fetchDiscoverMovies', () => {
      return Promise.resolve(validApiResponse({
        results: mockedMovies,
        total_results: mockedMovies.length,
      }))
    })

    const { data, status } = await fetchDiscoverMovies()
    
    expect(status).toBe(200)
    expect(data).toMatchObject(movieResponseStructure)
    expect(data.results.length).toBeGreaterThan(0)
    expect(data.results[0]).toMatchObject(movieStructure)
  })

  it('throws an error if fetch movies to discover fails', async () => {
    mockInvalidApiCall()

    await expect(fetchDiscoverMovies()).rejects.toThrow()
  })

  it('fetchs genres', async () => {
    mockFetcher('fetchGenres', () => {
      return Promise.resolve(validApiResponse({
        genres: [
          { id: 1, name: 'genre' },
          { id: 2, name: 'genre 2' },
        ],
      }))
    })

    const { data, status } = await fetchGenres()

    expect(status).toBe(200)
    expect(data).toMatchObject({
      genres: expect.any(Array),
    })

    expect(data.genres.length).toBeGreaterThan(0)
    expect(data.genres[0]).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
    })
  })

  it('throws an error if fetch genres fails', async () => {
    mockInvalidApiCall()

    await expect(fetchGenres()).rejects.toThrow()
  })

  it('throws an error if argument keyword is not defined when fetching movies', () => {
    expect(() => fetchMovies({ })).toThrow()
  })
  
  it('fetchs movies by keyword', async () => {
    mockFetcher('fetchMovies', () => {
      return Promise.resolve(validApiResponse({
        results: mockedMovies,
        total_results: mockedMovies.length,
      }))
    })

    const { data, status } = await fetchMovies({ keyword: 'movie' })

    expect(status).toBe(200)
    expect(data).toMatchObject(movieResponseStructure)
    expect(data.results.length).toBeGreaterThan(0)
    expect(data.results[0]).toMatchObject(movieStructure)
  })

  it('fetchs movies by keyword and release date', async () => {
    mockFetcher('fetchMovies', () => {
      return Promise.resolve(validApiResponse({
        results: mockedMovies,
        total_results: mockedMovies.length,
      }))
    })

    const { data, status } = await fetchMovies({ keyword: 'movie', year: 2021 })

    expect(status).toBe(200)
    expect(data).toMatchObject(movieResponseStructure)
    expect(data.results.length).toBeGreaterThan(0)
    expect(data.results[0]).toMatchObject(movieStructure)
  })

  it('throws an error if fetch movies fails', async () => {
    mockInvalidApiCall()

    await expect(fetchMovies({ keyword: 'gucci' })).rejects.toThrow()
  })
})
