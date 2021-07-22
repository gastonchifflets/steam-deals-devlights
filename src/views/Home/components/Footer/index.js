import { Link } from "react-router-dom";

import logo from '../../../../img/footerlogo.png';
import './index.css'

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt='logo' className='footer-img'/>
            <ul className='footer-items'>
                <li>
                    <Link to='#' className='footer-item'>Acerca de Valve</Link>
                </li>
                <li>
                    <Link to='#' className='footer-item'>| Steamworks</Link>
                </li>
                <li>
                    <Link to='#' className='footer-item'>| Empleo</Link>
                </li>
                <li>
                    <Link to='#' className='footer-item'>| Distribución de Steam</Link>
                </li>
                <li>
                    <Link to='#' className='footer-item'>| Tarjetas regalo</Link>
                </li>
                <li>
                    <Link to='#' className='footer-item'>| Steam</Link>
                </li>
                <li>
                    <Link to='#' className='footer-item'>| @steam</Link>
                </li>
            </ul>
        </footer>
    );
}