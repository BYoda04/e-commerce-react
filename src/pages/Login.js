import React from 'react';
import { CreateAccount, LogIn } from '../components';
import { useSelector } from 'react-redux';

const Login = () => {

    const dayORnight = useSelector(state=>state.dayORnight)

    return (
        <div className={dayORnight ? 'login nightBG container' : 'login dayBG container'}>
           <LogIn />
           <CreateAccount /> 
        </div>
    );
};

export default Login;