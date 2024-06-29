import { useEffect, useState } from 'react'
import './App.css'
import ListOfMovies from './components/ListOfMovies'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    getMovies({ search: newSearch })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange}
            name='query'
            value={search}
            type='text'
            placeholder='Avengers, Star Wars, The Matrix...'
          />

          <label htmlFor='sort'>Sort movies</label>
          <input id='sort' type='checkbox' onChange={handleSort} checked={sort} />

          <button type='submit'>Buscar</button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando...</p> : <ListOfMovies movies={movies} />}
      </main>
    </div>
  )
}

export default App
