import React from 'react';
import { useNavigate } from 'react-router-dom';

const PurchaseProducts = ({product}) => {

    const navigate = useNavigate()

    const productItem = (id)=>{
        navigate(`/products/${id}`)
    }

    return (
        <div className='purchase-product'>
            <div className='purchase-product-container cursor' onClick={()=>productItem(product?.productsInCart?.productId)}>
                <p>Product:  {product?.title}</p>
                <p>Quantity:  {product?.productsInCart?.quantity}</p>
                <p>Total Spent:  ${parseInt(product?.price)*parseInt(product?.productsInCart?.quantity)}.00</p>
            </div>
        </div>
    );
};

export default PurchaseProducts;