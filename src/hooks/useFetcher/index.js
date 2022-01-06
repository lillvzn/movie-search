import { useEffect, useReducer } from 'react'

const fetchStatuses = {
  FETCHING: 'FETCHING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

const reducer = (state, { type, data, error }) => {
  const { FETCHING, SUCCESS, FAILURE } = fetchStatuses
  const actions = {
    [FETCHING]: { ...state, isLoading: true },
    [SUCCESS]: { ...state, isLoading: false, data },
    [FAILURE]: { ...state, isLoading: false, error },
  }

  return actions[type]
}

export default function useFetcher(fetcher) {
  const [ state, dispatch ] = useReducer(reducer, {
    isLoading: true,
    data: [ ],
    error: { },
  })

  useEffect(() => {
    let mounted = true

    const fetch = async () => {
      dispatch({ type: fetchStatuses.FETCHING })

      try {
        const { data } = await fetcher()

        mounted && dispatch({ type: fetchStatuses.SUCCESS, data })
      } catch (error) {
        mounted && dispatch({ type: fetchStatuses.FAILURE, error })
      }
    }

    fetch()

    return () => { mounted = false }
  }, [ dispatch, fetcher ])

  return { ...state }
}
