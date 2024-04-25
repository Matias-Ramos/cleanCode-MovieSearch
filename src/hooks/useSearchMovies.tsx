import { useState, useRef, useEffect } from "react";
import { Movie_I } from "../interfaces/movie_i";
import getMovies from "../api/getMovies";

const useSearchMovies = () => {

    const apiKey = useRef(import.meta.env.VITE_API_KEY);

    const [movieList, setMovieList] = useState<Movie_I[]>([]);
    const [currentSearch, setCurrentSearch] = useState<string>("");

    const [ error, setError ] = useState<string>();
    const [ loading, setLoading ] = useState<boolean>();

    const handleMovieSearch = (newSearch: string) => {
        setCurrentSearch(newSearch)
    }

    useEffect(() => {
        setLoading(true);

        getMovies(currentSearch, apiKey.current)
        .then( result => {
            // console.log(result)
            setLoading(false);
            setMovieList( result as Movie_I[])
        })
        .catch( message => {
            console.log("message en catch:")
            console.log(message)
            setLoading(false);
            setError(message);
        })
        
    }, [currentSearch])
    

    return {movieList, handleMovieSearch, loading, error};
}
export default useSearchMovies;