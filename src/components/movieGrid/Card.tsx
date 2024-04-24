// Interfaces
import { Movie_I } from "../../interfaces/movie_i";

const Card = ({ movie }: { movie: Movie_I }) => {

    const { title, year, poster } = movie;

    return (
        <div className="flex flex-col items-center my-5">
            <span>
                <b>{title}</b>
            </span>
            <span>
                <i>Release: {year}</i>
            </span>
            <img src={poster} alt={title} className="pt-2" />
        </div>
    )
}
export default Card;