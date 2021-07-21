import { Link } from "react-router-dom";

import { Icon } from '@iconify/react';
import shoppingCart from '@iconify-icons/fa-solid/shopping-cart';

import logo from '../../img/logo.png';
import './index.css';

export default function NavBar () {
    return (
    <nav className='navbar container'>
        <img src={logo} alt='logo'/>
        <ul className='navbar-items'>
            <li>
                <Link to='/' className='navbar-item'>Home</Link>
            </li>
            <li>
                <Link to='/browse' className='navbar-item'>Browse</Link>
            </li>
            <li>
                <Link to='/cart' className='navbar-item secondary'>
                    <Icon icon={shoppingCart}/>
                    <span className='item-text'>Cart</span>
                </Link>
            </li>
        </ul>
    </nav>
    );
}