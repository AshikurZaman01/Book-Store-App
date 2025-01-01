import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import BookCard from './BookCard';

const BookList = ({ books = [], isLoading, error, selectedCategory }) => {

    const filteredBooks = selectedCategory === "Choose a Genre"
        ? books
        : books?.filter(book => book.category === selectedCategory.toLowerCase());



    return (
        <Swiper navigation={true}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {filteredBooks.length > 0 && filteredBooks.map(book => (
                <SwiperSlide key={book._id}>
                    <BookCard book={book} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default BookList