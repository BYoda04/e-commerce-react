import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ButtonBack, ProductItem } from '../components';
import { getProductsCategory } from '../store/slices/categorys.slice';
import { setProduct } from '../store/slices/product.slice';

const Products = () => {

    const { id } = useParams()
    const dayORnight = useSelector(state=>state.dayORnight)
    const product = useSelector(state=>state.product)
    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
            .then(res=>dispatch(setProduct(res.data.data)))
            .catch(err=>console.log(err))
        dispatch(getProductsCategory())
    },[id,dispatch])

    return (
        <div className={dayORnight ? 'products nightBG container' : 'products dayBG container'}>
            <ButtonBack name={product?.product?.title}/>
            <ProductItem product={product?.product}/>
        </div>
    );
};

export default Products;