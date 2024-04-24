const containerStyle = "flex justify-center py-7 border-solid border-2 border-neutral-600";
const formStyle = "w-3/5 flex items-center justify-evenly";
const btnStyle = "w-40 inline-block";

const Searcher = () => {
    return (
        <div className={containerStyle}>
            <form className={formStyle}>
                <label className="inline-block">
                    Movie:
                    <input type="text" name="movieName" className="ms-3" />
                </label>
                <button className={btnStyle}>Search</button>
            </form>
        </div>
    )
}
export default Searcher