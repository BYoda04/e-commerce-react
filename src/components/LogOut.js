import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../store/slices/cart.slice';
import { loggin } from '../store/slices/loged.slice';
import { setPurchases } from '../store/slices/purchases.slice';
import { setQuantity } from '../store/slices/quantity.slice';
import { setUser } from '../store/slices/user.slice';

const LogOut = () => {

    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()

    const logOut = ()=>{
        localStorage.clear()
        dispatch(loggin(false))
        dispatch(setUser([]))
        dispatch(setPurchases([]))
        dispatch(setCart([]))
        dispatch(setQuantity(0))
    }

    return (
        <div className='logout-container'>
            <div className='logout'>
                <ion-icon name="id-card-outline"></ion-icon>
                <div className='info-container'>
                    <p><ion-icon name="person-outline"></ion-icon> {user?.firstName} {user?.lastName}</p>
                    <p><a href={`tel:${user?.phone}`}><ion-icon name="call-outline"></ion-icon> {user?.phone}</a></p>
                </div>
            </div>
            <div className='log-out cursor'>
                <p onClick={()=>logOut()}>log out <ion-icon name="exit-outline"></ion-icon></p>
            </div>
        </div>
    );
};

export default LogOut;