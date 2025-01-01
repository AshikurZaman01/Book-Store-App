import Banner from "./components/Banner/Banner"
import RecommendedBooks from "./components/RecommendedBooks/RecommendedBooks"
import TopSeller from "./components/TopSeller/TopSeller"
import News from "./News/News"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSeller></TopSeller>
            <RecommendedBooks></RecommendedBooks>
            <News></News>
        </div>
    )
}

export default Home