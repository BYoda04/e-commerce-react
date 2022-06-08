import React from 'react';

const Empty = () => {
    return (
        <div className='empty-cart'>
            <div className='empty-container'>
                <ion-icon name="cart-outline"></ion-icon>
                <p>empty</p>
            </div>
        </div>
    );
};

export default Empty;