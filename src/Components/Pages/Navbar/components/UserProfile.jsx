import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';

const UserProfile = ({ currentUser }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const userRoutes = [
        { id: 1, name: 'Dashboard', path: '/dashboard' },
        { id: 2, name: 'Orders', path: '/orders' },
        { id: 3, name: 'Cart Page', path: '/cart' },
        { id: 4, name: 'Check Out', path: '/checkout' },
    ];

    return (
        <div>
            {currentUser ? (
                <div className="relative">
                    <img
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-8 h-8 bg-cover rounded-full cursor-pointer hover:border-primary hover:border-2 transition duration-150"
                        src="https://avatar.iran.liara.run/public/20"
                        alt="User Avatar"
                    />
                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                        <div className="absolute bg-white border rounded shadow-md mt-2 font-secondary">
                            <ul className="list-none p-2">
                                {userRoutes.map((route) => (
                                    <li key={route.id}>
                                        {route.action ? (
                                            <button
                                                onClick={() => {
                                                    route.action();
                                                    setIsDropdownOpen(false);
                                                }}
                                                className="block w-full text-left p-2 hover:bg-gray-200"
                                            >
                                                {route.name}
                                            </button>
                                        ) : (
                                            <NavLink
                                                onClick={() => setIsDropdownOpen(false)}
                                                to={route.path}
                                                className={({ isActive }) =>
                                                    `block p-2 hover:bg-gray-200 ${isActive ? 'bg-gray-200 font-bold' : ''}`
                                                }
                                            >
                                                {route.name}
                                            </NavLink>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <NavLink to="/login">
                    <FiUser className="w-6 h-6 cursor-pointer hover:text-primary transition duration-200" />
                </NavLink>
            )}
        </div>
    )
}

export default UserProfile