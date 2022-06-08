import React from 'react';

const EmptyCart = () => {
    return (
        <div className='empty-cart-container'>
            <ion-icon name="cart-outline"></ion-icon>
            <p>empty</p>
        </div>
    );
};

export default EmptyCart;