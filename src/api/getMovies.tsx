
import { getCurrentTime } from "@/utils/getCurrentTime";
import { Movie_I } from "../interfaces/movie_i";
import { MovieFetchError } from "@/classes/movieFetchError";

async function getMovies(currentSearch: string, apiKey: string) {

    if(!currentSearch) return
    
    try {
        const responseJson = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${currentSearch}`);
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

    catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        const currentTime: string = getCurrentTime();
        throw new MovieFetchError(
            `There was an error fetching your movies: ${errorMessage}`,
            currentTime,
        );
    }
}

export default getMovies;