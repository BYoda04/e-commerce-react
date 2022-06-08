import React, { useEffect, useState } from 'react';
import PurchaseProducts from './PurchaseProducts';

const PurchasesItem = ({product}) => {

    const [array,setArray] = useState([])
    const [date,setDate] = useState([])
    const months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]

    useEffect(()=>{
        setArray((product?.createdAt).split("T"))
    },[product])

    useEffect(()=>{
        if (array.length !== 0) {
            setDate(array[0].split("-"))
        }
    },[array])

    return (
        <div className='purchase-item'>
            <div className='header-date'>
                <>{date.length!==0? <h3>{months[parseInt(date[1])-1]} {date[2]}, {date[0]}</h3> :<></>}</>
            </div>
            <div>
                {product?.cart?.products?.map(product=>(
                    <PurchaseProducts product={product} key={product?.id}/>
                ))}
            </div>
        </div>
    );
};

export default PurchasesItem;