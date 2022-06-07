import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ButtonBack = ({name}) => {

    const dayORnight = useSelector(state=>state.dayORnight)
    const navigate = useNavigate()

    const back = ()=>{
        navigate('/')
    }

    return (
        <div className={ dayORnight ? 'button-back nightBG': 'button-back dayBg'}>
            <p className='cursor' onClick={()=>back()}>Home</p><ion-icon name="caret-forward-outline"></ion-icon>{name}
        </div>
    );
};

export default ButtonBack;