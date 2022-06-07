import { createSlice } from '@reduxjs/toolkit';

export const logedSlice = createSlice({
    name: 'loged',
    initialState: false,
    reducers: {
        loggin: state=>true
    }
})

export const { loggin } = logedSlice.actions;

export default logedSlice.reducer;
