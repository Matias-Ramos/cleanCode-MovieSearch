// List the movies by showing the title, year, and poster.


import { useEffect, useRef, useState } from 'react';

interface Movie_I {
    id: string,
    title: string,
    year: string,
    poster: string,
}

const MovieMapper = () => {

    const [movieList, setMovieList] = useState<Movie_I[]>([]);
    const apiKey = useRef(import.meta.env.VITE_API_KEY);

    useEffect(() => {
        
        // *********  PENDING
        // Modify so it doesn't fetch on every render
        async function getMovies() {
            const responseJson = await fetch(`https://www.omdbapi.com/?apikey=${apiKey.current}&s=Avengers`);
            const responseObj = await responseJson.json();
            const formattedList: Movie_I[] = responseObj.Search.map((movie: any) => (
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
    }, [])


    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-7'>
            {movieList?.map(movie => {
                return (
                    <div key={movie.id}>
                        <span>{movie.title}</span>
                        <span>{movie.year}</span>
                        <img src={movie.poster} alt={movie.title} />
                    </div>
                )
            })}
        </div>
    )
}
export default MovieMapper