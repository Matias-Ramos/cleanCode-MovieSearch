// Components

import Header from "./components/Header"
import Loading from "./components/Loading";
import FetchError from "./components/fetchError/FetchError";
import MovieMapper from "./components/movieGrid/MovieMapper"
import Searcher from "./components/movieSearcher/Searcher"
import useSearchMovies from "./hooks/useSearchMovies";

function App() { 

  const { 
    handleMovieSearch,
    movieList,
    isLoading,
    error
  } = useSearchMovies(); 

  return (
    <>
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
    </>
  )
}

export default App
