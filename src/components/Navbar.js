import React from 'react'
import logo from '../assets/github.png'
import hanburger from '../assets/hamburger.png';
import './Navbar.css'

import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="right">
                <img src={hanburger} alt="" />
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
