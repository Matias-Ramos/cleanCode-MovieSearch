const headerStyle = "w-full flex justify-between items-end";
const h1Style = "text-2xl font-bold";

const Header = () => (
    <header className={headerStyle}>

        <h1 className={h1Style}>
            Movie searcher
        </h1>
        <span>
            Clean code
        </span>

    </header>
)
export default Header