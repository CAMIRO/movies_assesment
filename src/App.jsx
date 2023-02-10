import "./App.css";
import { useMovies } from "./hooks/useMovies.js";
import { Movies } from "./components/Movies.jsx";

function App() {
  const { movies: mappedMovies } = useMovies();
  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form">
          <input type="text" placeholder="Advengers, Star wars, The Matrix" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
