// List the movies by showing the title, year, and poster.

// Interfaces
import { Movie_I } from "../../interfaces/movie_i";
// Components
import Card from "./Card";
// Styles
const containerStyle = 'w-full grid grid-cols-1 lg:grid-cols-3 gap-7'

const MovieMapper = ({ movieList }: { movieList: Movie_I[] }) => {

    return (
        <div className={containerStyle}>
            {
                movieList?.map(movie => (
                    <Card key={movie.id} movie={movie} />
                ))
            }
        </div>
    )
}
export default MovieMapper