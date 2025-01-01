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
                state.cartItems.push(action.payload);
                toast.success('Item added to cart');
            } else {
                toast.error('Item already in cart');
            }

        }
    }

})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;