import { useState, useRef, useEffect } from "react";
import { Movie_I } from "../interfaces/movie_i";
import getMovies from "../api/getMovies";
import { MovieFetchError } from "@/classes/movieFetchError";

const useSearchMovies = () => {

    /*************************/
    /* Objects  */

    const apiKey = useRef(import.meta.env.VITE_API_KEY);

    const [movieList, setMovieList] = useState<Movie_I[]>([]);
    const [currentSearch, setCurrentSearch] = useState<string>("");

    const [ error, setError ] = useState<MovieFetchError>();
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const handleMovieSearch = (newSearch: string) => {
        if( newSearch === currentSearch ) return;
        console.log("handleMovieSearch")
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