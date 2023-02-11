// https://www.twitch.tv/videos/1732102325
import './App.css'
// import { useRef } from "react";
// useRef: referencia mutable que perciste durante todo el ciclo de vida de tu componente
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'

import { Movies } from './components/Movies.jsx'

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search })

  //const counter = useRef(0) // valor que persiste entre renders

  const handleSubmit = event => {
    event.preventDefault()
    // const { search } = Object.fromEntries(new window.FormData(event.target));
    // console.log("🚀 ~  search", search);
    getMovies()
  }

  const handleChange = event => {
    updateSearch(event.target.value)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={search}
            name="search"
            type="text"
            onChange={handleChange}
            placeholder="Advengers, Star wars, The Matrix"
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
