import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchases } from '../store/slices/purchases.slice';

const Purchases = () => {

    const dayORnight = useSelector(state=>state.dayORnight)
    const purchases = useSelector(state=>state.purchases)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPurchases())
    },[])

    console.log(purchases)

    return (
        <div className={dayORnight ? 'purchases nightBG container' : 'purchases dayBG container'}>
            soy tus compras
        </div>
    );
};

export default Purchases;