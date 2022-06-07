import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsList = ({product}) => {

    const navigate = useNavigate()

    const productItem = (id)=>{
        navigate(`/products/${id}`)
    }

    return (
        <div className='cards-list cursor day-shadow' onClick={()=>productItem(product.id)}>
            <div className='card-list-container'>
                <div className='card-list-img'>
                    <div className='card-list-img-container img'><img src={product?.productImgs[2]}alt='img-product'></img></div>
                </div>
                <div className='card-list-name'>
                    {product?.title}
                </div>
                <div className='card-list-add'>
                    <div className='price'>
                        <span>price</span>
                        <p>${product?.price}</p>
                    </div>
                    <div>
                        <button>buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsList;