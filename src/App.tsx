// Components
import Header from "./components/Header"
import Searcher from "./components/movieSearcher/Searcher"
import Loading from "./components/Loading";
import FetchError from "./components/fetchError/FetchError";
import MovieMapper from "./components/movieGrid/MovieMapper"
// Hooks
import useSearchMovies from "./hooks/useSearchMovies";

function App() { 

  const { 
    handleMovieSearch,
    movieList,
    isLoading,
    error
  } = useSearchMovies(); 

  return (
    <div id="page" className=" px-4 lg:px-20">
      <Header />
      <main>
        <Searcher handleMovieSearch={handleMovieSearch}/>
        <Loading isLoading={isLoading} />
        <FetchError error={error} />
        { 
          (!isLoading && !error) &&
          <MovieMapper movieList={movieList}/>
        }
      </main>
    </div>
  )
}

export default App
