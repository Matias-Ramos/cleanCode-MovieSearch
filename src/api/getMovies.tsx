
import { getCurrentTime } from "@/utils/currentTimeString";
import { Movie_I } from "../interfaces/movie_i";



async function getMovies(currentSearch: string, apiKey: string) {


    if(!currentSearch) return
    
    try {
        throw ("UnexpectedError happen")
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

        const currentTime:string = getCurrentTime();
        throw generateError(currentTime,message)
    }
}

function generateError(currentTime:string, message:string){
    return ( currentTime + ": " + message )
}

export default getMovies;