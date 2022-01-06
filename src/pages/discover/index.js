import {
  Wrapper,
  TotalCounter,
  MovieResults,
  MovieFilters,
} from './styles'
import MovieList from 'components/movielist'
import SearchFilters from 'components/searchfilters'
import useGenres from 'hooks/useGenres'
import useDiscoverMovies from 'hooks/useDiscoverMovies'
import { ratingOptions, languageOptions } from 'helpers/filters'
import useFilter from 'hooks/useFilter'
import Loader from 'components/loader'

export default function Discover() {
  const { isLoading: isFetchingGenres, genres, getGenreById } = useGenres()
  const { movies: moviesToDiscover, isLoading: isFetchingMovies } = useDiscoverMovies()
  const {
    movies: filteredMovies,
    isLoading: isFilteringMovies,
    setYear,
    setKeyword
  } = useFilter()

  const isLoading = (isFetchingGenres || isFetchingMovies || isFilteringMovies)

  const totalMovies = filteredMovies.total >= 0
    ? filteredMovies.total
    : moviesToDiscover.total

  const movieList = filteredMovies.total >= 0
    ? filteredMovies.result
    : moviesToDiscover.result

  return (
    <Wrapper>
      <MovieFilters>
        <SearchFilters
          genres={genres} 
          ratings={ratingOptions}  
          languages={languageOptions}
          setYear={setYear}
          setKeyword={setKeyword}
          isLoading={isFetchingGenres}
        />
      </MovieFilters>

      <MovieResults>
        {
          isLoading
            ? <Loader />
            : (<>
              {totalMovies <= 0
                ? <h1>0 results found</h1>
                : (<>
                  <TotalCounter>{totalMovies} movies</TotalCounter>
                  <MovieList
                    movies={movieList}
                    getGenre={getGenreById}
                  />
                </>)
              }
            </>)
        }
      </MovieResults>
    </Wrapper>
  )
}
