import {
  API_URL,
  DEFAULT_LANGUAGE,
  request,
} from './helpers/fetcher'

export const fetchDiscoverMovies = ({ language = DEFAULT_LANGUAGE } = { }) => {
  return request(`${API_URL}/discover/movie`, { language })
}

export const fetchGenres = ({ language = DEFAULT_LANGUAGE } = { }) => {
  return request(`${API_URL}/genre/movie/list`, { language })
}

export const fetchMovies = ({ keyword, year, language = DEFAULT_LANGUAGE }) => {
  if (!keyword) {
    throw new Error(`Keyword parameter is required to fetch movies`)
  }

  return request(`${API_URL}/search/movie`, {
    language,
    query: keyword,
    primary_release_year: year,
  })
}
