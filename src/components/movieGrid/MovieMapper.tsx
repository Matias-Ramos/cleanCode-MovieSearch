// Interfaces
import { Movie_I } from "../../interfaces/movie_i";
// Components
import Card from "./Card";
// Styles
const containerStyle = 'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5  gap-7'

const MovieMapper = ({ movieList }: { movieList: Movie_I[] }) => (
    <div className={containerStyle}>
        {
            movieList?.map(movie => (
                <Card key={movie.id} movie={movie} />
            ))
        }
    </div>
)
export default MovieMapper