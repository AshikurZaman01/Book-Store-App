import { useDispatch, useSelector } from "react-redux";
import { removeOrder } from "../../../Redux/Features/Orders/orderSlice";

const Orders = () => {

    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.order);

    const handleRemoveOrder = (orderId) => {
        dispatch(removeOrder(orderId));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="container max-w-screen-lg mx-auto">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Orders</h2>

                {orders.length > 0 ? (
                    <ul>
                        {orders.map((order) => (
                            <li key={order.id} className="bg-white rounded shadow p-6 mb-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-xl font-semibold">{order.user.name}</h3>
                                        <p>{order.user.email}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold">${order.totalPrice}</p>
                                        <button
                                            className="text-red-600"
                                            onClick={() => handleRemoveOrder(order.id)}
                                        >
                                            Remove Order
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-lg font-semibold">Items:</h4>
                                    <ul>
                                        {order.items.map((item) => (
                                            <li key={item.id} className="flex justify-between">
                                                <p>{item.title}</p>
                                                <p>
                                                    {item.quantity} x ${item.newPrice}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No orders available</p>
                )}
            </div>
        </div>
    )
}

export default Orders