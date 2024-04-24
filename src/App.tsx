// Components
import Header from "./components/Header"
import MovieMapper from "./components/movieGrid/MovieMapper"
import Searcher from "./components/movieSearcher/Searcher"
import useSearchMovies from "./hooks/useSearchMovies";

function App() { 

  const { movieList, handleMovieSearch } = useSearchMovies();

  return (
    <>
      <Header />
      <main>
        <Searcher handleMovieSearch={handleMovieSearch}/>
        <MovieMapper movieList={movieList}/>
      </main>
    </>
  )
}

export default App
