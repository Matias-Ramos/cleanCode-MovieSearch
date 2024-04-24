import { Movie_I } from "../interfaces/movie_i";

async function getMovies({ currentSearch }: { currentSearch: string }) {
    const apiKey = import.meta.env.VITE_API_KEY;

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
    return(formattedList);
}

export default getMovies;