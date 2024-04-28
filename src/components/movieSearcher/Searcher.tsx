// Fns & Hooks
import debounce from "just-debounce-it";
import { useCallback } from "react";
// Components
import SubmitBtn from "./SubmitBtn";
import Input from "./Input";
// Styles
const containerStyle = "flex justify-center py-7 border-solid border-2 border-neutral-600";
const formStyle = "w-4/5 md:w-3/5 flex items-center justify-evenly flex-col sm:flex-row gap-5 sm:gap-0";

const Searcher = ({ handleMovieSearch }: { handleMovieSearch: Function }) => {

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const form = evt.currentTarget as HTMLFormElement;
        const movieName = new FormData(form).get('movieName') as string;
        handleMovieSearch(movieName);
    }

    const debounceHandleMovieSearch = useCallback(
        debounce((search: string) => {
            handleMovieSearch(search)
        }, 750)
    , [])
    const handleInputChg = (newValue: string) => {
        debounceHandleMovieSearch(newValue);
    }

    return (
        <div className={containerStyle}>
            <form className={formStyle} onSubmit={(e) => handleSubmit(e)}>
                <label className="inline-block text-center">
                    Movie:
                    <Input handleInputChg={handleInputChg} />
                </label>
                <SubmitBtn />
            </form>
        </div>
    )
}
export default Searcher