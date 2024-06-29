import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const formatYear = (year) => Number(year.slice(0, 4))

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  , [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => formatYear(a.year) - formatYear(b.year))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, loading, error, getMovies }
}
