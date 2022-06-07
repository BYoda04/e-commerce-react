import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, setProducts } from '../store/slices/products.slice';

const Search = () => {

    const products = useSelector(state=>state.products)
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()

    const submit = (data)=>{
        if (((data.name).trim()) !== "") {
            let array
            let product = (((data.name).trim()).toLowerCase()).split(" ")
            let productSearch = []
            for (let i = 0; i < products?.length; i++) {
                array = (products[i].title).split(" ")
                if (product.length !== 1) {
                    for (let e = 0; e < product.length; e++) {
                        for (let a = 0; a < array.length; a++) {
                            if (array[a] === product[e]) {
                                productSearch.push(products[i])
                            }
                        }
                    }
                } else {
                    for (let e = 0; e < array.length; e++) {
                        if (array[e].toLowerCase() === product[0]) {
                            productSearch.push(products[i])
                        }
                    }
                }
            }
            if (productSearch.length !== 0) {
                dispatch(setProducts(productSearch))
            } else {
                dispatch(getProducts())
            }
        } else {
            dispatch(getProducts())
        }
    }

    return (
        <div className='search-container'onSubmit={handleSubmit(submit)}>
            <form>
                <input type='text' placeholder='search product' {...register("name")}/>
                <button type='submit'><ion-icon name="search-outline"></ion-icon></button>
            </form>
        </div>
    );
};

export default Search;