const headerStyle = "w-full flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0 lg:items-end py-5";
const h1Style = "text-2xl font-bold lg:order-1";
const spanStyle = "bg-slate-300 text-black font-bold px-3 text-lg lg:order-2";

const Header = () => (
    <header className={headerStyle}>

        <span className={spanStyle}>
            <i>Code Quality Showcase</i>
        </span>
        
        <h1 className={h1Style}>
            Movie searcher
        </h1>

    </header>
)
export default Header