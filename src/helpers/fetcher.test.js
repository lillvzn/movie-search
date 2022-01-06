import { parseParameters, request } from './fetcher'
import { mockInvalidApiCall, mockValidApiCall } from 'helpers/tests'

describe('Fetcher helper', () => {
  it('empty object to be an empty string', () => {
    const parsedParameters = parseParameters({ })

    expect(parsedParameters).toBe('')
  })

  it('parse a parameter', () => {
    const parsedParameters = parseParameters({ key: 'value' })

    expect(parsedParameters).toBe('key=value')
  })

  it('parse multiple parameters', () => {
    const parsedParameters = parseParameters({
      param1: 'value',
      param2: 'second parameter',
    })

    expect(parsedParameters).toBe('param1=value&param2=second parameter')
  })

  it('fetch data from a valid api', async () => {
    mockValidApiCall()

    const { data, status } = await request('/')

    expect(status).toBe(200)
    expect(data).toEqual({ key: 'value' })
  })

  it('throws error if api data is invalid', async () => {
    mockInvalidApiCall()

    await expect(request('/')).rejects.toThrow()
  })
})
