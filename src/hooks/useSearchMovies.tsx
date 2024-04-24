import { useState, useRef, useEffect } from "react";
import { Movie_I } from "../interfaces/movie_i";

const useSearchMovies = () => {

    const apiKey = useRef(import.meta.env.VITE_API_KEY);

    const [movieList, setMovieList] = useState<Movie_I[]>([]);
    const [currentSearch, setCurrentSearch] = useState<string>("");
        
    const handleMovieSearch = (newSearch: string) => {
        setCurrentSearch(newSearch)
    }

    useEffect(() => {

        async function getMovies() {
            if(!currentSearch) return
            
            const responseJson = await fetch(`https://www.omdbapi.com/?apikey=${apiKey.current}&s=${currentSearch}`);
            const responseObj = await responseJson.json();
            
            const formattedList: Movie_I[] = (responseObj.Search).map((movie: any) => (
                {
                    id: movie.imdbID,
                    title: movie.Title,
                    year: movie.Year,
                    poster: movie.Poster,
                }
            ))
            setMovieList(formattedList);
        }
        getMovies();
    }, [currentSearch])
    

    return {movieList, handleMovieSearch};
}
export default useSearchMovies;