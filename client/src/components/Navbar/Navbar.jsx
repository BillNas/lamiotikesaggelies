import React from 'react';
import logo from '../../images/logo.png';
import './navbar.css';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <ul>
                <li>
                    <FaSignInAlt /> Σύνδεση
                </li>
                <li>
                    <FaUser /> Εγγραφή
                </li>
            </ul>
        </header>
    );
}

export default Navbar;
