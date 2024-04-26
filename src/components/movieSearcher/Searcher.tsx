// Styles
const containerStyle = "flex justify-center py-7 border-solid border-2 border-neutral-600";
const formStyle = "w-3/5 flex items-center justify-evenly";
const inputStyle = `ms-3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;
const btnStyle = `w-40 inline-block 
bg-[#5C9A9D] hover:bg-[#3D6669] text-white font-bold py-2 px-4 rounded
`;

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
                <label className="inline-block" >
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