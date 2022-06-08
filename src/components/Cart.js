import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, setCart } from '../store/slices/cart.slice';
import { active } from '../store/slices/modal.slice';
import getConfig from '../utils/getConfig';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

const Cart = () => {

    const modal = useSelector(state=>state.modal)
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()

    const desactive = ()=>{
        dispatch(active(false))
    }

    useEffect(()=>{
        dispatch(getCart())
    },[cart,dispatch])

    const shop = ()=>{
        if (cart.length !== 0) {
            let body = {
                "street": "Green St. 1456",
                "colony": "Southwest",
                "zipCode": 12345,
                "city": "USA",
                "references": "Some references"
            }
            axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/purchases",body,getConfig())
                .then(res=>dispatch(setCart([])))
                .catch(err=>console.log(err.response))
        }
    }

    return (
        <div className={modal? 'cart' : 'cart desactive' }>
            <div className='cart-container'>
                <div className='cart-body'>
                    {cart.length !== 0? cart?.map(product=>(
                        <CartItem product={product} key={product?.id}/>
                    )) : <EmptyCart />}
                </div>
                <div className='cart-footer'>
                    <div>
                        <button className='cursor' onClick={()=>shop()}>
                            <ion-icon name="bag-check-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div className='blur' onClick={()=>desactive()}></div>
        </div>
    );
};

export default Cart;