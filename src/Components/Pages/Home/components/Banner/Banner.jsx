
const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-16">

            <div className="md:w-1/2 w-full order-2 md:order-1">
                <h1 className="md:text-5xl text-2xl font-medium mb-7">New Release This Week</h1>
                <p className="mb-10 text-justify md:text-current">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic vero quasi animi ad porro similique, culpa nihil. Nobis, ex sunt voluptatibus aperiam fugit ea et laboriosam quibusdam. Mollitia veniam delectus rerum, at corporis omnis maiores quam quas voluptas obcaecati. Repudiandae.
                </p>
                <button className="bg-primary text-black px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:bg-opacity-90 hover:scale-105">
                    Subscription
                </button>
            </div>

            <div className="md:w-1/2 w-full flex items-center md:justify-end order-1 md:order-2 mb-10 md:mb-0 lg:mb-0">
                <img
                    src="https://github.com/mdalmamunit427/book-store-app-ui-assets/blob/main/assets/banner.png?raw=true"
                    alt="Book Cover"
                    className="rounded-lg shadow-md "
                />
            </div>

        </div>
    )
}

export default Banner