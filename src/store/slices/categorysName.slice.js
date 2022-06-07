import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const categorysNameSlice = createSlice({
    name: 'categorysName',
    initialState: [],
    reducers: {
        setNameCategory: (state,action)=>{
            return action.payload
        }
    }
})

export const { setNameCategory } = categorysNameSlice.actions;

export const getNamesCategory = () => dispatch =>{
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
            .then(res=>dispatch(setNameCategory(res.data.data.categories)))
}

export default categorysNameSlice.reducer;
