import axios from 'axios';
import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {

    const [visible,setVisible] = useState(false)
    const [error,setError] = useState(false)
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const changeVisible = ()=>{
        setVisible(!visible)
    }


    const submit = (data)=>{
        data.role = "admin"
        if ((data.email).trim() === "") {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 1500);
        } else if ((data.firstName).trim() === "") {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 1500);
        } else if ((data.lastName).trim() === "") {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 1500);
        } else if ((data.password).trim() === "") {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 1500);
        } else if ((data.phone).trim() === "") {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 1500);
        } else {
            axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users",data)
                .then(res=>{
                    navigate("/")
                })
                .catch(err=>console.log(err.response))
        }
    }

    return (
        <div className='login-container'>
            <div className='title'>
                <label htmlFor='email'>Please sign up to continue shopping</label>
            </div>
            {error? <div>
                <p>fill in all the fields</p>
            </div> : <></>}
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor='email'>email</label>
                    <div className='input-container'>
                        <input type='email' id='email' {...register("email")}/>
                    </div>
                </div>
                <div>
                    <label htmlFor='name'>first name</label>
                    <div className='input-container'>
                        <input type='text' id='name' {...register("firstName")}/>
                    </div>
                </div>
                <div>
                    <label htmlFor='last-name'>last name</label>
                    <div className='input-container'>
                        <input type='text' id='last-name' {...register("lastName")}/>
                    </div>
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <div className='input-container'>
                        <input type={visible? 'text' : 'password' } id='password' {...register("password")}/>
                        <button type='button' className='cursor' onClick={()=>changeVisible()}>{visible? <ion-icon name="eye-outline"></ion-icon> : <ion-icon name="eye-off-outline"></ion-icon>}</button>
                    </div>
                </div>
                <div>
                    <label htmlFor='phone'>phone</label>
                    <div className='input-container'>
                        <input type='number' id='phone' placeholder='10 digits long' {...register("phone")}/>
                    </div>
                </div>
                <div className='button-container'>
                    <button type='submit' className='cursor'>sign up</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAccount;