// Styles
const containerStyle = "flex justify-center py-7 border-solid border-2 border-neutral-600";
const formStyle = "w-3/5 flex items-center justify-evenly";
const inputStyle = "ms-3 border-solid border-2 border-neutral-600";
const btnStyle = "w-40 inline-block border-solid border-2 border-neutral-600";

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
                        className={inputStyle}
                    />
                </label>
                <button type="submit" className={btnStyle}>
                    Search
                </button>
            </form>
        </div>
    )
}
export default Searcher