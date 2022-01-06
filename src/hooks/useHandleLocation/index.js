import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function useHandleLocation(handler) {
  const location = useLocation()
  const callback = useRef(handler)

  useEffect(() => callback.current(location), [ location ])
}
