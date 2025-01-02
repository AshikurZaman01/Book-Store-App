import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Features/Cart/cartSlice';
import orderSlice from '../Features/Orders/orderSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        order: orderSlice,
    }
})

export default store;