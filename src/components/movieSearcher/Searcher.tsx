// Styles
const containerStyle = "flex justify-center py-7 border-solid border-2 border-neutral-600";
const formStyle = "w-3/5 flex items-center justify-evenly";
const btnStyle = "w-40 inline-block";

const Searcher = ({ handleMovieSearch }: { handleMovieSearch: Function }) => {

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const form = evt.currentTarget as HTMLFormElement;
        const movieName = new FormData(form).get('movieName') as string;
        handleMovieSearch(movieName);
    }
 
    return (
        <div className={containerStyle}>
            <form className={formStyle} onSubmit={(e) => handleSubmit(e)}>
                <label className="inline-block">
                    Movie:
                    <input 
                        type="text"
                        name="movieName"
                        // value={currentSearch}
                        // onChange={(evt) => handleMovieSearch(evt.target.value)}
                        className="ms-3" 
                    />
                </label>
                <button type="submit" className={btnStyle}>Search</button>
            </form>
        </div>
    )
}
export default Searcher