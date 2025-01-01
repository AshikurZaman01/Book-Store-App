import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    return (
        <div className="relative sm:w-72 w-40 space-x-2 transition-transform duration-100 ease-in-out">

            <CiSearch className=" absolute inline-block left-3 top-1/2 translate-y-[-50%]" />
            <input type="text"
                name="" id=""
                placeholder="Search here"
                className="bg-[#EAEAEA] w-full py-1 px-6 md:px-8 rounded-md focus:outline-none"
            />

        </div>
    )
}

export default SearchBar