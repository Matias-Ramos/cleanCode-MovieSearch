const headerStyle = "w-full flex justify-between items-end py-5";
const h1Style = "text-2xl font-bold";
const spanStyle = "bg-slate-300 text-black font-bold px-3";

const Header = () => (
    <header className={headerStyle}>

        <h1 className={h1Style}>
            Movie searcher
        </h1>
        <span className={spanStyle}>
            <i>Clean code project</i>
        </span>

    </header>
)
export default Header