import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../../../../Redux/Features/Cart/cartSlice";
import { FaSpinner } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const SingleBook = () => {
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (book) => {
        dispatch(addToCart(book?.data));
        setIsAdded(true);
    };

    const { id } = useParams();

    const { data: books, isLoading, error } = useQuery({
        queryKey: ["books"],
        queryFn: async () => {
            const res = await axios.get(
                "https://6775288692222241481ac9ef.mockapi.io/books"
            );
            return res.data;
        },
    });

    const book = books?.find((book) => book._id === parseInt(id));

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <FaSpinner className="text-blue-500 text-4xl animate-spin" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen text-red-500">
                <p>Error loading book details. Please try again later.</p>
            </div>
        );
    }

    const formattedDate = book?.createdAt ? new Date(book.createdAt).toLocaleDateString() : "Unknown Date";

    return (
        <div className="max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden bg-white p-6">
            <div className="mb-6">
                <img
                    src={book?.coverImage}
                    alt={book?.title}
                    className="mx-auto h-96 object-cover rounded-lg"
                />
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">{book?.title}</h1>
                    {book?.trending && (
                        <span className="text-white bg-red-500 px-2 py-1 text-sm rounded-full animate-bounce">
                            New
                        </span>
                    )}
                </div>

                <p className="text-gray-700 text-lg">
                    <strong>Author:</strong> {book.author || "Admin"}
                </p>
                <p className="text-gray-700 text-lg">
                    <strong>Published:</strong> {formattedDate}
                </p>
                <p className="text-gray-700 text-lg">
                    <strong>Category:</strong> {book?.category || "N/A"}
                </p>
                <p className="text-gray-700 text-justify">
                    <strong>Description:</strong> {book?.description}
                </p>

                <div className="flex items-center space-x-4 mb-4">
                    <p className="text-lg font-semibold text-green-600">${book?.newPrice}</p>
                    <p className="text-lg text-gray-500 line-through">${book?.oldPrice}</p>
                </div>

                <button
                    onClick={() => handleAddToCart(book)}
                    className={`mt-4 px-6 py-3 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${isAdded ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    disabled={isAdded}
                >
                    <FiShoppingCart className="text-xl" />
                    <span>{isAdded ? "Added to Cart" : "Add to Cart"}</span>
                </button>
            </div>
        </div>
    );
};

export default SingleBook;
