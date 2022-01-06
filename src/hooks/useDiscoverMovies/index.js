import { fetchDiscoverMovies } from 'fetcher'
import useFetcher from 'hooks/useFetcher'

export default function useDiscoverMovies() {
  const { data, isLoading, error } = useFetcher(fetchDiscoverMovies)

  return {
    movies: {
      result: data.results || [ ],
      total: data.total_results || -1,
    },
    isLoading,
    error
  }
}
