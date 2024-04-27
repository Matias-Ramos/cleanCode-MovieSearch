// Assets
import defaultPoster from '/default_poster.png'

function formatMovieList(array: any) {
    return (
        array.map((movie: any) => (
            {
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster === "N/A" ? defaultPoster : movie.Poster,
            }
        )
        )
    )
}
export default formatMovieList;