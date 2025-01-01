import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({

    name: 'cart',
    initialState,

    reducers: {

        addToCart: (state, action) => {
            const existingItem = state.cartItems.find((item) => item._id === action.payload._id);

            if (!existingItem) {
                // Initialize quantity if adding new item
                state.cartItems.push({ ...action.payload, quantity: 1 });
                toast.success('Item added to cart');
            } else {
                toast.error('Item already in cart');
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item._id === action.payload._id);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item._id === action.payload._id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
            toast.success('Item removed from cart');
        },
        crearCart: (state) => {
            state.cartItems = [];
            toast.success('Cart cleared');
        }

    }

})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, crearCart } = cartSlice.actions;
export default cartSlice.reducer;