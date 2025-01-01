import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <div>
            <Link to={'/'}>
                <img src="https://github.com/AshikurZaman01/MERN-Book-Store-Website/blob/main/Front%20End/public/images/assets/fav-icon.png?raw=true" alt=""
                    className="sm:w-4 md:w-8 lg:w-10" />
            </Link>
        </div>
    )
}

export default Logo