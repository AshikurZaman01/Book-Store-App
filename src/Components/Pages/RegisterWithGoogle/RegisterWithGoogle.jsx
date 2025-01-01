import { FaGoogle } from "react-icons/fa"

const RegisterWithGoogle = () => {
    return (
        <div>
            <button className="w-full flex justify-center items-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none transition duration-200">
                <FaGoogle className="mr-2" />
                <span>Register With Google</span>
            </button>
        </div>
    )
}

export default RegisterWithGoogle