import { createSlice } from '@reduxjs/toolkit';

export const dayORnightSlice = createSlice({
    name: 'dayORnight',
    initialState: false,
    reducers: {
        changeColor: state=>!state
    }
})

export const { changeColor } = dayORnightSlice.actions;

export default dayORnightSlice.reducer;
