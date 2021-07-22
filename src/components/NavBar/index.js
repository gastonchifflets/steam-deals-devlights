import { Link } from "react-router-dom";



import logo from '../../img/logo.png';
import './index.css';
import Cart from "../../views/Cart";

export default function NavBar () {

    return (
    <nav className='navbar container'>
        <img src={logo} alt='logo'/>
        <ul className='navbar-items'>
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