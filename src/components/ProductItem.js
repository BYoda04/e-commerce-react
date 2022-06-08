import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../store/slices/cart.slice';
import { productsCategory } from '../store/slices/categorys.slice';
import { active } from '../store/slices/modal.slice';
import { add, minun } from '../store/slices/stock.slice'
import getConfig from '../utils/getConfig';
import ProductsList from './ProductsList';

const ProductItem = ({product}) => {
    const stock = useSelector(state=>state.stock)
    const categorys = useSelector(state=>state.categorys)
    const dayORnight = useSelector(state=>state.dayORnight)
    const { handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [productsCategorys,setProductsCategorys] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(false)
        dispatch(productsCategory(product?.category))
        setProductsCategorys(categorys)
        if (productsCategorys.length !== 0) {
            setLoading(true)
        }
    },[categorys,dispatch,product?.category,productsCategorys.length])

    const productItem = (id)=>{
        navigate(`/products/${id}`)
    }

    const plus = ()=>{
        dispatch(add())
    }

    const min = ()=>{
        if (stock!==1) {
            dispatch(minun())
        }
    }

    const addCart = (data)=>{
        data.id = product?.id
        data.quantity = stock
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/cart",data,getConfig())
            .then(res=>{
                dispatch(active(true))
                dispatch(getCart())
            })
            .catch(err=>console.log(err.response))
    }

    return (
        <>
            <div className='cards-list day-shadow product-item' onClick={()=>productItem(product.id)}>
                <div className='card-list-container'>
                    <div className='card-list-img'>
                        <div className='card-list-img-container img'><img src={product?.productImgs[2]}alt='img-product'></img></div>
                    </div>
                    <div className='card-list-name'>
                        {product?.title}
                    </div>
                    <div className='description'>
                        <p>{product?.description}</p>
                    </div>
                    <form className='card-list-add' onSubmit={handleSubmit(addCart)}>
                        <div className='stock'>
                            <div className='price'>
                                <div>
                                    <span>price:</span>
                                    <p>${parseInt(product?.price)*stock}</p>
                                </div>
                            </div>
                            <div>
                                <button type='button' className='cursor' onClick={()=>min()}><ion-icon name="remove-outline"></ion-icon></button>
                                <p className='stock-value'>{stock}</p>
                                <button type='button' className='cursor' onClick={()=>plus()}><ion-icon name="add-outline"></ion-icon></button>
                            </div>
                        </div>
                        <div>
                            <button className='cursor'><ion-icon name="bag-add-outline"></ion-icon></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={ dayORnight ? 'button-back nightBG': 'button-back dayBg'}>
                <p>Discover Similar Items</p>
            </div>
            {loading? 
            <>
                {productsCategorys?.map(category=>(
                <ProductsList product={category} key={category.id}/>
                ))} 
            </> : ""}
        </>
    );
};

export default ProductItem;