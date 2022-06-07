import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/slices/products.slice';
import ProductsList from './ProductsList';

const Products = () => {

    const products = useSelector(state=>state.products)
    const categorys = useSelector(state=>state.categorys)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return (
        <div className='products-container'>
            { categorys?.products !== undefined ? products?.map(product=>(
                <ProductsList product={product} key={product.id}/>
            )) : categorys?.map(product=>(
                <ProductsList product={product} key={product.id}/>
            ))}
        </div>
    );
};

export default Products;