import React, { useEffect, useState } from 'react';
import { CreateAccount, LogIn, LogOut } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { loggin } from '../store/slices/loged.slice';
import { setUser } from '../store/slices/user.slice';

const Login = () => {

    const dayORnight = useSelector(state=>state.dayORnight)
    const loged = useSelector(state=>state.loged)
    const [selected,setSelected] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (localStorage.getItem("status") === "success") {
            dispatch(loggin(true))
            dispatch(setUser(JSON.parse(localStorage.getItem("user"))))
        } else {
            dispatch(loggin(false))
        }
    },[dispatch])

    const changeSelected = ()=>{
        setSelected(!selected)
    }

    return (
        <>
            {loged? <div className={dayORnight ? 'login nightBG container' : 'login dayBG container'}>
                <LogOut />
            </div> : <div className={dayORnight ? 'login nightBG container' : 'login dayBG container'}>
            <div className='login-section'>
                <div className='login-option'>
                    <div className={dayORnight? 'nightBorder' : 'dayBorder' }>
                        <p className={selected? 'cursor active' : 'cursor'} onClick={()=>changeSelected()}>LOG IN</p>
                    </div>
                    <div className={dayORnight? 'nightBorder' : 'dayBorder' }>
                        <p className={selected? 'cursor' : 'cursor active'} onClick={()=>changeSelected()}>SIGN UP</p>
                    </div>
                </div>
                {selected? <LogIn /> : <CreateAccount />}
            </div>
        </div>}
        </>
    );
};

export default Login;