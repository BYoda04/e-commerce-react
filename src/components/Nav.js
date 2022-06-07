import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav className='dayBG'>
          <div className='logo'>
            <Link to='/'>E-COMMERCE</Link>
          </div>
          <div className='buttons'>
            <Link to='/login'><ion-icon name="person-circle-outline"></ion-icon></Link>
            <Link to='/purchases'><ion-icon name="card-outline"></ion-icon></Link>
            <p className='cursor'><ion-icon name="bag-handle-outline"></ion-icon></p>
          </div>
        </nav>
    );
};

export default Nav;