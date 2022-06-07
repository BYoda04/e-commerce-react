import { createSlice } from '@reduxjs/toolkit';

export const stockSlice = createSlice({
    name: 'stock',
    initialState: 1,
    reducers: {
        add: state =>state+1,
        minun: state =>state-1
    }
})

export const { add,minun } = stockSlice.actions;

export default stockSlice.reducer;
