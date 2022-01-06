import { useState, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { fetchMovies } from 'fetcher'

const defaultMovies = {
  result: [ ],
  total: -1,
}

export default function useFilter() {
  const [ movies, setMovies ] = useState(defaultMovies)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState({ })
  const [ cache, setCache ] = useState({ })
  const [ keyword, setKeyword ] = useState('')
  const [ year, setYear ] = useState(0)

  const callback = useDebouncedCallback(async (year, keyword) => {
    if (!keyword) {
      setMovies(defaultMovies)
      return
    }

    const key = `keyword:${keyword}_year:${year}`
    const cachedResult = cache[key]

    if (cachedResult) {
      setMovies(cachedResult)
      return
    }

    setIsLoading(true)

    try {
      const { data } = await fetchMovies({ keyword, year })
      const movie = {
        result: data.results,
        total: data.total_results,
      }

      setMovies(movie)
      setError({ })
      setCache({ ...cache, [key]: movie })
    } catch (err) {
      setMovies(defaultMovies)
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }, 500)

  useEffect(() => {
    callback(year, keyword)
  }, [ year, keyword, callback ])

  return { movies, setKeyword, setYear, isLoading, error }
}
