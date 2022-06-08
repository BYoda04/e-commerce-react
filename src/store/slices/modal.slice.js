import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: false,
    reducers: {
        active: (state,action)=>action.payload,
    }
})

export const { active } = modalSlice.actions;

export default modalSlice.reducer;
