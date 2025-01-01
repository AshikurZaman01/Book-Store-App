import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const News = () => {

    const { data: news, isLoading, error } = useQuery({
        queryKey: ['news'],
        queryFn: async () => {
            const res = await axios.get('https://6775288692222241481ac9ef.mockapi.io/news');
            return res.data;
        },
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg shadow-inner">
                <div className="relative w-16 h-16 border-4 border-gray-300 rounded-full animate-spin border-t-blue-500"></div>
            </div>
        );
    }

    return (
        <div>
            <div className='py-16'>
                <h2 className='text-3xl font-semibold mb-6'>News</h2>
            </div>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
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
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {news.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                                <div className='py-4'>
                                    <Link to={`/news/${item.id}`}>
                                        <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                                    </Link>
                                    <div className='w-12 h-[4px] bg-primary'></div>
                                    <p>{item.description}</p>
                                </div>
                                <div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '5px' }}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default News