import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PurchasesItem } from '../components';
import { getPurchases } from '../store/slices/purchases.slice';

const Purchases = () => {

    const dayORnight = useSelector(state=>state.dayORnight)
    const purchases = useSelector(state=>state.purchases)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPurchases())
    },[dispatch])

    return (
        <div className={dayORnight ? 'purchases nightBG container' : 'purchases dayBG container'}>
            <div className='purchases-container'>
                {purchases.length !== 0? <>{purchases?.map(purchase=>(
                    <PurchasesItem product={purchase} key={purchase?.id}/>
                ))}</> : <div>no tienes compras</div> }
            </div>
        </div>
    );
};

export default Purchases;