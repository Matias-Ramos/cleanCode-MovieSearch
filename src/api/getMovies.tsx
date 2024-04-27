// Data types
import { Movie_I } from "../interfaces/movie_i";
import { MovieFetchError } from "@/classes/movieFetchError";
// Utils
import formatMovieList from "@/utils/formatMovieList";
import { getCurrentTime } from "@/utils/getCurrentTime";

async function getMovies(currentSearch: string, apiKey: string) {

    if (!currentSearch) return;

    try {
        /***** */
        // Fetch
        const responseJson = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${currentSearch}`);
        const responseObj = await responseJson.json();

        /***** */
        // Formating
        if (responseObj.Error === "Movie not found!") return ([])
        const formattedList: Movie_I[] = formatMovieList(responseObj.Search);

        /***** */
        // Return
        return (formattedList);
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