import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const categorysSlice = createSlice({
    name: 'categorys',
    initialState: [],
    reducers: {
        setProductsCategory: (state,action)=>{
            return action.payload
        },
        productsCategory: (state, action) => {
            const name = action.payload;
            return state?.products?.filter((product) => product.category.name === name)
        }
    }
})

export const { setProductsCategory, productsCategory } = categorysSlice.actions;

export const getProductsCategory = () => dispatch =>{
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
            .then(res=>dispatch(setProductsCategory(res.data.data)))
}

export default categorysSlice.reducer;
