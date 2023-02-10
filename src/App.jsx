// https://www.twitch.tv/videos/1732102325
import './App.css'
// import { useRef } from "react";
// useRef: referencia mutable que perciste durante todo el ciclo de vida de tu componente
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useState, useEffect } from 'react'

function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    // const { query } = Object.fromEntries(new window.FormData(event.target));
    // console.log("🚀 ~  query", query);
    console.log({ query })
  }

  const handleChange = event => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setError('introduce un valor')
      return
    }
    if (query.match(/^\d+$/)) {
      setError('no se puede buscar pelicula con solo numeros')
      return
    }
    setError(null)
  }, [query])

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={query}
            name="query"
            type="text"
            onChange={handleChange}
            placeholder="Advengers, Star wars, The Matrix"
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
