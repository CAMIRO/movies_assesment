import { useState, useEffect, useRef } from 'react'

export function useSearch() {
  const isFirstInput = useRef(true)
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('introduce un valor')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('no se puede buscar pelicula con solo numeros')
      return
    }
    setError(null)
  }, [search])
  return { search, updateSearch, error }
}
