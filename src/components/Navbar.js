import React from 'react'
import logo from '../assets/github.png'
import './Navbar.css'


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="right">
                <ul className="menu">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
                <i className="fas fa-bars"></i>
            </div>
        </div>
    )
}

export default Navbar
