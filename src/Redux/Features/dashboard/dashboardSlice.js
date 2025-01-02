import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    orderCount: 0,
    totalRevenue: 0,
    isLoading: false,
    error: null,
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setOrderCount: (state, action) => {
            state.orderCount = action.payload;
        },
        setTotalRevenue: (state, action) => {
            state.totalRevenue = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setUser, setOrderCount, setTotalRevenue, setLoading, setError } = dashboardSlice.actions;

export default dashboardSlice.reducer;
