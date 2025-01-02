import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../../../Redux/Features/Orders/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { crearCart } from "../../../Redux/Features/Cart/cartSlice";

const CheckoutForm = () => {

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice * item.quantity, 0).toFixed(2);

    const [checkOutDetails, setCheckOutDetails] = useState({
        name: '',
        phn: '',
        street: '',
        city: '',
        country: '',
        state: '',
        zipCode: '',
        email: ''
    });

    const [isChecked, setIsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setIsChecked(checked);
        } else {
            setCheckOutDetails({
                ...checkOutDetails,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isChecked) {
            setErrorMessage("You must agree to the Terms & Conditions and Shopping Policy.");
            return;
        }
        const emptyFields = Object.entries(checkOutDetails)
            .filter(([key, value]) => !value)
            .map(([key]) => key);
        if (emptyFields.length > 0) {
            setErrorMessage(`Please provide a value for: ${emptyFields.join(', ')}`);
            return;
        }
        setErrorMessage('');

        const order = {
            id: Date.now(),
            user: { ...checkOutDetails },
            items: cartItems,
            totalPrice: totalPrice
        };

        dispatch(addOrder(order));

        toast.success("Order placed successfully!");

        navigate("/orders");

        dispatch(crearCart());
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className=" grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
                <div className="text-gray-600">
                    <p className="font-medium text-lg">Personal Details</p>
                    <p>Please fill out all the fields.</p>
                </div>
                <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                            <label htmlFor="name">Full Name</label>
                            <input
                                value={checkOutDetails.name}
                                onChange={onChange}
                                type="text"
                                name="name"
                                id="name"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                        </div>
                        <div className="md:col-span-5">
                            <label htmlFor="email">Email Address</label>
                            <input
                                value={checkOutDetails.email}
                                onChange={onChange}
                                type="email"
                                name="email"
                                id="email"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="email@domain.com"
                            />
                        </div>
                        <div className="md:col-span-5">
                            <label htmlFor="phn">Phone Number</label>
                            <input
                                value={checkOutDetails.phn}
                                onChange={onChange}
                                type="tel"
                                name="phn"
                                id="phn"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="+123 456 7890"
                            />
                        </div>
                        <div className="md:col-span-3">
                            <label htmlFor="street">Address / Street</label>
                            <input
                                value={checkOutDetails.street}
                                onChange={onChange}
                                type="text"
                                name="street"
                                id="street"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="city">City</label>
                            <input
                                value={checkOutDetails.city}
                                onChange={onChange}
                                type="text"
                                name="city"
                                id="city"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="country">Country / region</label>
                            <input
                                value={checkOutDetails.country}
                                onChange={onChange}
                                type="text"
                                name="country"
                                id="country"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="Country"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="state">State / province</label>
                            <input
                                value={checkOutDetails.state}
                                onChange={onChange}
                                type="text"
                                name="state"
                                id="state"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="State"
                            />
                        </div>
                        <div className="md:col-span-1">
                            <label htmlFor="zipCode">Zipcode</label>
                            <input
                                value={checkOutDetails.zipCode}
                                onChange={onChange}
                                type="text"
                                name="zipCode"
                                id="zipCode"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                        </div>

                        {errorMessage && <p className="text-red-500 font-semibold   lg:w-[500px]">{errorMessage}</p>}

                        <div className="md:col-span-5 mt-3">
                            <div className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="billing_same"
                                    id="billing_same"
                                    className="form-checkbox"
                                    checked={isChecked}
                                    onChange={onChange}
                                />
                                <label htmlFor="billing_same" className="ml-2 w-full">
                                    I agree to the <span className="underline text-blue-600">Terms & Conditions</span> and <span className="underline text-blue-600">Shopping Policy.</span>
                                </label>
                            </div>
                        </div>
                        <div className="md:col-span-5 text-right">
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" type="submit">
                                Place an Order
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm