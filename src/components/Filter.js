import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsCategory, productsCategory } from '../store/slices/categorys.slice';
import { getNamesCategory } from '../store/slices/categorysName.slice';

const Filter = () => {

    const categorysName = useSelector(state=>state.categorysName)
    const dispatch = useDispatch()
    const [categorySelected,setCategorySelected] = useState([])
    const [visible,setVisible] = useState(false)

    useEffect(()=>{
        dispatch(getProductsCategory())
        dispatch(getNamesCategory())
        dispatch(getProductsCategory())
    },[dispatch])

    const categories = ()=>{
        setVisible(!visible)
    }

    const addCategory = (category)=>{
        dispatch(getProductsCategory())
        setTimeout(() => {
            setCategorySelected(category)
            dispatch(productsCategory(category.name))
            setVisible(!visible)
        }, 1000);
    }

    const eraser = ()=>{
        dispatch(getProductsCategory())
        setCategorySelected([])
    }

    return (
        <>
            <div className='filter-container'>
                <div className='filter cursor' onClick={()=>categories()}>
                    <p>filter</p>
                    <p><ion-icon name="filter-outline"></ion-icon></p>
                </div>
                {categorySelected.length !== 0 ? 
                    <div className='filter cursor' onClick={()=>eraser()}>
                        <p>{categorySelected.name}</p>
                        <p><ion-icon name="close-outline"></ion-icon></p>
                    </div>
                 : <></>}
            </div>
            <div className={ visible ? 'filter-list-container' : 'none'}>
                <div className='filter-list'>
                    {categorysName?.map(category=>(
                        <div className='filter cursor' onClick={()=>addCategory(category)} key={category?.id}>
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Filter;