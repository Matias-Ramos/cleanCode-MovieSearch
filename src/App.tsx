// Components
import Error from "./components/Error";
import Header from "./components/Header"
import Loading from "./components/Loading";
import MovieMapper from "./components/movieGrid/MovieMapper"
import Searcher from "./components/movieSearcher/Searcher"
import useSearchMovies from "./hooks/useSearchMovies";

function App() { 

  const { movieList, handleMovieSearch, loading, error } = useSearchMovies();
  
  return (
    <>
      <Header />
      <main>
        <Searcher handleMovieSearch={handleMovieSearch}/>
        { loading && <Loading /> }
        { error   && <Error error={error}/>   }
        { movieList && <MovieMapper movieList={movieList}/>}
      </main>
    </>
  )
}

export default App
