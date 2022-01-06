import axios from 'axios'

export const {
  REACT_APP_API_URL: API_URL,
  REACT_APP_API_KEY: API_KEY,
} = process.env

export const DEFAULT_LANGUAGE = 'en-US'

axios.interceptors.request.use(config => ({
  ...config,
  url: `${config.url}&api_key=${API_KEY}`
}))

export const parseParameters = (parameters) => {
  return Object.entries(parameters)
    .map(([ key, value ]) => value && `${key}=${value}`)
    .filter(Boolean)
    .join('&')
}

export const request = async (url, parameters = { }) => {
  const parsedParameters = parseParameters(parameters)
  const fullUrl = `${url}?${parsedParameters}`
  const response = await axios.get(fullUrl)
  
  if (response.status !== 200) {
    throw new Error(`Unable to fetch data from given url <${fullUrl}>`)
  }

  return response
}
