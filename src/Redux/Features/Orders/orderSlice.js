import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        updateOrder: (state, action) => {
            const index = state.orders.findIndex((order) => order.id === action.payload.id);
            if (index !== -1) {
                state.orders[index] = action.payload;
            }
        },
        removeOrder: (state, action) => {
            state.orders = state.orders.filter((order) => order.id !== action.payload);
        },
    },
});

export const { addOrder, updateOrder, removeOrder } = orderSlice.actions;
export default orderSlice.reducer;