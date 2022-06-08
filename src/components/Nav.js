import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { active } from '../store/slices/modal.slice';
import { getCart } from '../store/slices/cart.slice';

const Nav = () => {

  const dispatch = useDispatch()
  const loged = useSelector(state=>state.loged)
  const cart = useSelector(state=>state.cart)
  const [quantity,setQuantity] = useState(0) 
  const navigate = useNavigate()

  const modal = ()=>{
    if (loged) {
        dispatch(active(true))
        dispatch(getCart())
    } else {
      navigate("/login")
    }
  }

  useEffect(()=>{
    dispatch(getCart())
  },[loged,dispatch])

  useEffect(()=>{
    setQuantity(cart.length)
  },[cart])

  return (
      <nav className='dayBG'>
        <div className='logo'>
          <Link to='/'>E-COMMERCE</Link>
        </div>
        <div className='buttons'>
          <Link to='/login'><ion-icon name="person-circle-outline"></ion-icon></Link>
          <Link to='/purchases'><ion-icon name="card-outline"></ion-icon></Link>
          <div>
            <p className='cursor' onClick={()=>modal()}>
              <ion-icon name="bag-handle-outline"></ion-icon>
            </p>
            <div className='counter'>
              <p>{quantity}</p>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Nav;