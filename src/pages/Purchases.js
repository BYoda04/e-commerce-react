import React from 'react';
import { useSelector } from 'react-redux';

const Purchases = () => {

    const dayORnight = useSelector(state=>state.dayORnight)

    return (
        <div className={dayORnight ? 'purchases nightBG container' : 'purchases dayBG container'}>
            soy tus compras
        </div>
    );
};

export default Purchases;