import { createSlice } from '@reduxjs/toolkit';

export const quantitySlice = createSlice({
    name: 'quantity',
    initialState: 0,
    reducers: {
        setQuantity: (state,action)=>{
            return action.payload
        },
    }
})

export const { setQuantity } = quantitySlice.actions;

export default quantitySlice.reducer;