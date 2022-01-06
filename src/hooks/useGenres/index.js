import { fetchGenres } from 'fetcher'
import useFetcher from 'hooks/useFetcher'

export default function useGenres() {
  const { data, isLoading, error } = useFetcher(fetchGenres)

  const getGenreById = (id) => {
    const { genres } = data

    if (!genres) {
      throw new Error('No existing genres to filter')
    }

    const genre = genres.find(genre => genre.id === id)

    if (!genre) {
      throw new Error(`Genre ${id} does not exists`)
    }
    
    return genre.name
  }

  return {
    genres: data.genres || [ ],
    isLoading,
    error,
    getGenreById
  }
}
