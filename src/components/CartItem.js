import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import getConfig from '../utils/getConfig';

const CartItem = ({product}) => {

    const [img,setImg] = useState([])
    const { register, handleSubmit } = useForm()

    useEffect(()=>{
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${product?.id}`)
            .then(res=>setImg(res.data.data.product.productImgs))
            .catch(err=>console.log(err.response))
    },[product?.id])

    const remove = (data)=>{
        if (product?.productsInCart?.quantity !== 1) {
            data.newQuantity = product?.productsInCart?.quantity - 1
        } else {
            data.newQuantity = product?.productsInCart?.quantity
        }
        axios.patch("https://ecommerce-api-react.herokuapp.com/api/v1/cart",data,getConfig())
            .catch(err=>console.log(err.response))
    }

    const add = (data)=>{
        data.newQuantity = product?.productsInCart?.quantity + 1
        axios.patch("https://ecommerce-api-react.herokuapp.com/api/v1/cart",data,getConfig())
            .catch(err=>console.log(err.response))
    }

    const eraser = (id)=>{
        axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`,getConfig())
            .catch(err=>console.log(err))
    }

    return (
        <div className='cart-item'>
            <div className='cart-item-container'>
                <div className='cart-item-header'>
                    <div>
                        <p>{product?.title}</p>
                        <div className='cart-item-img'>
                            <img src={img[0]} alt='img-product'></img>
                        </div>
                    </div>
                </div>
                <div className='cart-item-footer'>
                    <div className='cart-item-quantity'>
                        <form className='cursor' onSubmit={handleSubmit(remove)}>
                            <input type='number' className='none' value={product?.productsInCart?.productId} {...register("id")}></input>
                            <button>
                                <ion-icon name="remove-outline"></ion-icon>
                            </button>
                        </form>
                        <div>
                            <p>{product?.productsInCart?.quantity}</p>
                        </div>
                        <form className='cursor' onSubmit={handleSubmit(add)}>
                            <input type='number' className='none' value={product?.productsInCart?.productId} {...register("id")}></input>
                            <button>
                                <ion-icon name="add-outline"></ion-icon>
                            </button>
                        </form>
                    </div>
                    <div className='cart-item-trash' onClick={()=>eraser(product?.productsInCart?.productId)}>
                            <ion-icon name="trash-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;