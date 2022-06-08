import { createSlice } from '@reduxjs/toolkit';
import getConfig from '../../utils/getConfig';
import axios from 'axios';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state,action)=>{
            return action.payload
        },
    }
})

export const { setCart } = cartSlice.actions;

export const getCart = () => (dispatch) => {
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart",getConfig())
        .then((res) => dispatch(setCart(res.data.data.cart.products)))
}

export default cartSlice.reducer;
