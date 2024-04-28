// Hooks
import { useState, useRef, useEffect } from "react";
// Data types
import { Movie_I } from "../interfaces/movie_i";
import { MovieFetchError } from "@/classes/movieFetchError";
// API calls
import getMovies from "../api/getMovies";

const useSearchMovies = () => {

    /*************************/
    /* Objects  */

    const apiKey = useRef(import.meta.env.VITE_API_KEY);

    const [movieList, setMovieList] = useState<Movie_I[]>([]);
    const [currentSearch, setCurrentSearch] = useState<string>("");

    const [ error, setError ] = useState<MovieFetchError>();
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const handleMovieSearch = (newSearch: string) => {
        
        const strIsLongEnough = (newSearch: string) => newSearch.length > 2 ;
        const isCurrentlyRendered = (newSearch: string) => newSearch === currentSearch;

        if( !strIsLongEnough(newSearch) || isCurrentlyRendered(newSearch) ) return;
        
        setCurrentSearch(newSearch)
    }


    /*************************/
    /* Effect  */

    useEffect(() => {
        setIsLoading(true);

        getMovies(currentSearch, apiKey.current)
        .then( result => {
            setIsLoading(false);
            setMovieList( result as Movie_I[])
        })
        .catch( (error: MovieFetchError) => {
            setIsLoading(false);
            setError(error);
        })
        
    }, [currentSearch])


    /*************************/
    /* Return  */

    return { 
        handleMovieSearch,
        movieList,
        isLoading,
        error
    };
}

export default useSearchMovies;