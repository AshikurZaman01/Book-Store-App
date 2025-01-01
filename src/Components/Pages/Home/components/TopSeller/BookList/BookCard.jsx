import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../../../Redux/Features/Cart/cartSlice';
import { useState } from 'react';

const BookCard = ({ book, isLoading }) => {
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (book) => {
        dispatch(addToCart(book));
        setIsAdded(true);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="rounded-lg transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
                <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                    <Link to={`/books/${book?._id}`}>
                        <img
                            src={book?.coverImage || '/default-cover.jpg'}
                            alt={book?.title || 'Book Cover'}
                            className="w-[200px] h-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                        />
                    </Link>
                </div>
                <div>
                    <Link to={`/books/${book?._id}`}>
                        <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                            {book?.title || 'Untitled'}
                        </h3>
                    </Link>
                    <p className="text-gray-600 mb-5">
                        {book?.description
                            ? book.description.length > 80
                                ? `${book.description.slice(0, 80)}...`
                                : book.description
                            : 'No description available.'}
                    </p>
                    <p className="font-medium mb-5">
                        ${book?.newPrice || '0.00'}{' '}
                        <span className="line-through font-normal ml-2">
                            ${book?.oldPrice || '0.00'}
                        </span>
                    </p>
                    <button
                        onClick={() => handleAddToCart(book)}
                        className={`bg-primary px-6 py-2 rounded-md btn btn-md space-x-1 flex items-center gap-1 ${
                            isAdded ? 'disabled bg-gray-400 cursor-not-allowed' : ''
                        }`}
                        disabled={isAdded}
                    >
                        <FiShoppingCart />
                        <span>{isAdded ? 'Added to Cart' : 'Add to Cart'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
