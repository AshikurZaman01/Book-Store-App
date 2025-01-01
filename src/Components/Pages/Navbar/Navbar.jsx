import Logo from "./components/Logo"
import Navitems from "./components/Navitems"
import SearchBar from "./components/SearchBar"

const Navbar = () => {
    return (
        <header className="max-w-screen-xl mx-auto px-4 py-6">

            <nav className="flex justify-between items-center">

                <div className="flex items-center gap-4 md:gap-16 ">
                    <Logo></Logo>
                    <SearchBar></SearchBar>
                </div>

                <div>
                    <Navitems></Navitems>
                </div>

            </nav>

        </header>
    )
}

export default Navbar