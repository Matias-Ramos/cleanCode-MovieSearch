// Components
import Disclaimer from "./Disclaimer";
// Styles
const headerStyle = "w-full flex flex-col text-center gap-5 py-5";
const h1Style = "text-3xl font-bold mt-4";

const Header = () => (
    <header className={headerStyle}>

        <Disclaimer />
        <h1 className={h1Style}> Movie searcher </h1>

    </header>
)
export default Header