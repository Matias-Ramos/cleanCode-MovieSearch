// Components
import Header from "./components/header/Header"
import Searcher from "./components/movieSearcher/Searcher"
import Loading from "./components/Loading";
import FetchError from "./components/fetchError/FetchError";
import MovieMapper from "./components/movieGrid/MovieMapper"
// Hooks
import { useSearchMovies } from "./hooks/useSearchMovies";
import MovieNotFound from "./components/movieGrid/MovieNotFound";

function App() {

  const {
    handleMovieSearch,
    movieList,
    isLoading,
    error,
  } = useSearchMovies();

  const movieNotFound = (!isLoading && !error && movieList && movieList.length === 0)
  const hasResults = ( !isLoading && !error && movieList);

  return (
    <div className="px-4 lg:px-20">
      <Header />
      <main>
        <Searcher handleMovieSearch={handleMovieSearch} />
        <Loading isLoading={isLoading} />
        <FetchError error={error} />
        { movieNotFound && <MovieNotFound /> }
        { hasResults && <MovieMapper movieList={movieList} /> }
      </main>
    </div>
  )
}

export default App
