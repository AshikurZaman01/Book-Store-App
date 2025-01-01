import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterWithGoogle from "../RegisterWithGoogle/RegisterWithGoogle";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.email) {
            setErrorMessage('Please enter your email');
        } else if (!user.password) {
            setErrorMessage('Please enter your password');
        } else {
            setErrorMessage('');
            console.log(user);
            // Add your registration logic here
        }
    };

    return (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-sm mx-auto bg-gray-300 shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-6">Register Here</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            value={user.email}
                            onChange={handleOnChange}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="shadow-sm border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            value={user.password}
                            onChange={handleOnChange}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="shadow-sm border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        {errorMessage && (
                            <div className="text-red-500 text-xs italic mb-3 text-center font-bold">
                                {errorMessage}
                            </div>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none transition duration-200"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p className="my-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link
                        className="text-blue-500 hover:text-blue-700 font-semibold"
                        to="/login"
                    >
                        Login
                    </Link>
                </p>
                <RegisterWithGoogle></RegisterWithGoogle>
            </div>
        </div>
    );
};

export default Register;
