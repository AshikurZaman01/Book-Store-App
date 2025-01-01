import Categories from "./Categories";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import BookList from "./BookList/BookList";

const TopSeller = () => {

    const [selectedCategory, setSelectedCategory] = useState('Choose a Genre');

    const { data: books, isLoading, error } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await axios.get('/src/assets/Data/books.json');
            return res.data
        }
    })


    return (
        <div>
            <div className="pt-10">
                <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
            </div>

            <div>
                <Categories
                    books={books}
                    isLoading={isLoading}
                    error={error}
                    setSelectedCategory={setSelectedCategory}>
                </Categories>
            </div>

            <BookList
                books={books} isLoading={isLoading}
                error={error}
                selectedCategory={selectedCategory}
            ></BookList>

        </div>
    )
}

export default TopSeller