import { IoHeartOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";


const Navitems = () => {

    const currentUser = true;

    return (
        <div className="flex items-center md:gap-5 gap-3">

            <div className="flex items-center gap-3">

                <UserProfile currentUser={currentUser}></UserProfile>

                <IoHeartOutline className="w-6 h-6 cursor-pointer hover:text-primary transition duration-200" />
            </div>

            <div>
                <Link to={"/cart"}>
                    <button className="btn btn-sm bg-primary text-black capitalize flex items-center rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
                        <div className="relative">
                            <BsCart4 className="w-6 h-6" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                                0
                            </span>
                        </div>
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Navitems