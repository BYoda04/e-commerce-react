import axios from 'axios';
import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loggin } from '../store/slices/loged.slice';
import { setUser } from '../store/slices/user.slice';

const LogIn = () => {

    const [visible,setVisible] = useState(false)
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()

    const changeVisible = ()=>{
        setVisible(!visible)
    }

    const submit = (data)=>{
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login",data)
            .then(res=>{
                localStorage.setItem("token",res.data.data.token)
                localStorage.setItem("status",res.data.status)
                localStorage.setItem("user",JSON.stringify(res.data.data.user))
                dispatch(loggin(true))
                dispatch(setUser(res.data.data.user))
            })
            .catch(err=>{
                localStorage.setItem("status",err.response.status)
            })
    }

    return (
        <div className='login-container'>
            <div className='title'>
                <label htmlFor='email'>Please log in to continue shopping</label>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor='email'>email</label>
                    <div className='input-container'>
                        <input type='email' id='email' placeholder='mason@gmail.com' {...register('email')}/>
                    </div>
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <div className='input-container'>
                        <input type={visible? 'text' : 'password' } id='password' placeholder='mason1234' {...register('password')}/>
                        <button type='button' className='cursor' onClick={()=>changeVisible()}>{visible? <ion-icon name="eye-outline"></ion-icon> : <ion-icon name="eye-off-outline"></ion-icon>}</button>
                    </div>
                </div>
                <div className='button-container'>
                    <button type='submit' className='cursor'>LOG IN</button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;