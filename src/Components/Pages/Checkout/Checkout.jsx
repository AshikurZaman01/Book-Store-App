import { useSelector } from 'react-redux';
import CheckoutForm from './CheckoutForm';

const Checkout = () => {

  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.newPrice * item.quantity), 0).toFixed(2);



  return (
    <section>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>

            <div>
              <h2 className="font-semibold text-xl text-gray-600 mb-2">Cash On Delivery</h2>
              <p className="text-gray-500 mb-2">Total Price: ${totalPrice ? totalPrice : 0}</p>
              <p className="text-gray-500 mb-6">Items: {cartItems.length ? cartItems.length : 0}</p>
            </div>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <CheckoutForm cartItems={cartItems} totalPrice={totalPrice}></CheckoutForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout