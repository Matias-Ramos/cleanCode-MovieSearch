// Components
import ErrorDialog from "./ErrorDialog"
// Class
import { MovieFetchError } from "@/classes/movieFetchError"

const FetchError = ({ error }: { error: MovieFetchError | undefined }) => (
  error
    ? <ErrorDialog error={error.message} key={error.currentTime} />
    : null
)
export default FetchError;