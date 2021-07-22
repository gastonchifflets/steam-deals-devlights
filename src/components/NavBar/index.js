import { Link } from "react-router-dom";

import { Icon } from '@iconify/react';
import hamburgerIcon from '@iconify-icons/ci/hamburger';

import logo from '../../img/logo.png';
import './index.css';
import Cart from "../../views/Cart";
import { useState } from "react";

export default function NavBar () {

    const [iconStyle, setIconStyle] = useState({});
    const [navbarItemsStyle, setNavbarItemsStyle] = useState({});
    const [show, setShow] = useState(false);

    const handleClick = (e) => {
        if (!show) {
            setIconStyle({
                transform: 'rotate(90deg)'
            })
            setNavbarItemsStyle({
                display: 'flex',
            })
            setShow(true)
        } else {
            setIconStyle({
                transform: 'rotate(0deg)'
            })
            setNavbarItemsStyle({
                display: 'none',
            })
            setShow(false)
        }
    }

    return (
    <nav className='navbar container'>
        <img src={logo} alt='logo'/>
        <Icon 
        icon={hamburgerIcon} 
        className='hamburger-icon' 
        style={iconStyle}
        onClick={(e) => handleClick(e.target.value)}/>
        <ul className='navbar-items' style={navbarItemsStyle}>
            <li>
                <Link to='/' className='navbar-item'>Home</Link>
            </li>
            <li>
                <Link to='#' className='navbar-item'>Browse</Link>
            </li>
            <li>
                <Cart />
            </li>
        </ul>
    </nav>
    );
}

// npm install --save-dev @iconify/react @iconify-icons/ci
