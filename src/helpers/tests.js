import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import * as fetcher from 'fetcher'

export const mockInvalidApiCall = () => {
  const mock = new MockAdapter(axios.create())
  
  jest.spyOn(axios, 'get')
    .mockImplementationOnce(() => mock.onGet().reply(404))
}

export const mockValidApiCall = () => {
  jest.spyOn(axios, 'get')
    .mockResolvedValue({
      status: 200,
      data: { key: 'value' },
    })
}

export const mockFetcher = (fetchFn, callback) => {
  jest.spyOn(fetcher, fetchFn)
    .mockImplementation(callback)
}

export const wait = (milliseconds) => {
  return new Promise((r) => setTimeout(r, milliseconds))
}
