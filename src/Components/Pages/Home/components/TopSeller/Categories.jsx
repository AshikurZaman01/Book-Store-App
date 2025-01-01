import { useState, useEffect } from "react";


const Categories = ({ books, isLoading, error, setSelectedCategory }) => {

    const [selectedCategory, setSelected] = useState("");
    const categories = Array.isArray(books) ? [...new Set(books.map(book => book.category))] : [];


    const handleCatChange = (event) => {
        const category = event.target.value;
        setSelected(category);
        setSelectedCategory(category);
    };

    return (
        <div>
            <div className="mb-8 flex items-center">
                <select
                    name="category"
                    id="category"
                    onChange={handleCatChange}
                    value={selectedCategory}
                    className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 pb-2 focus:outline-none"
                >
                    <option value="" className="text-gray-500" disabled>
                        Choose a Genre
                    </option>
                    {categories.map((category, index) => (
                        <option
                            key={index}
                            value={category}
                            className={selectedCategory === category ? "bg-blue-500 text-white" : ""}
                        >
                            {isLoading ?
                                <div className="skeleton h-4 w-full"></div>
                                :
                                category.charAt(0).toUpperCase() + category.slice(1)
                            }
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Categories