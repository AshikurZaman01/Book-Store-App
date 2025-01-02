import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Features/Cart/cartSlice';
import orderSlice from '../Features/Orders/orderSlice';
import dashboardSlice from '../Features/dashboard/dashboardSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        order: orderSlice,
        dashboard: dashboardSlice,
    }
})

export default store;