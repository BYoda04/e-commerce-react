import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../store/slices/cart.slice';
import { active } from '../store/slices/modal.slice';
import getConfig from '../utils/getConfig';

const ProductsList = ({product}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const productItem = (id)=>{
        navigate(`/products/${id}`)
    }

    const addCart = (data)=>{
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/cart",data,getConfig())
            .then(res=>{
                dispatch(active(true))
                dispatch(getCart())
            })
            .catch(err=>console.log(err.response))
    }

    return (
        <div className='cards-list cursor day-shadow'>
            <div className='card-list-container'>
                <div onClick={()=>productItem(product.id)}>
                    <div className='card-list-img'>
                        <div className='card-list-img-container img'><img src={product?.productImgs[2]}alt='img-product'></img></div>
                    </div>
                    <div className='card-list-name'>
                        {product?.title}
                    </div>
                </div>
                <form onSubmit={handleSubmit(addCart)}>
                    <input type='number' className='none' value={product?.id} {...register("id")}/>
                    <input type='number' className='none' value="1" {...register("quantity")}/>
                    <div className='card-list-add'>
                        <div className='price'>
                            <span>price</span>
                            <p>${product?.price}</p>
                        </div>
                        <div>
                            <button type='submit'>buy now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductsList;