import { Movie_I } from "../interfaces/movie_i";

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
    } catch (error: unknown) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error)
        // we'll proceed, but let's report it
        throw message;
    }
}

export default getMovies;