import React from 'react'
import logo from '../assets/burger1.png'
import hanburger from '../assets/hamburger.png';
import './Navbar.css'
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {

    const {pathname} = useLocation()

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <span>Burger</span><span>King</span>
            </div>
            <div className="right">
                <img src={hanburger} alt="" />
                <ul className="menu">
                    <li>{ pathname === '/' ? <Link to="/" className="active">Home</Link> : <Link to="/">Home</Link>}</li>
                    <li>{ pathname === '/products' ? <Link to="/products" className="active">Products</Link> : <Link to="/products">Products</Link>}</li>
                    <li>{ pathname === '/services' ? <Link to="/services" className="active">Services</Link> : <Link to="/services">Services</Link>}</li>
                    <li>{ pathname === '/contact' ? <Link to="/contact" className="active">Contact</Link> : <Link to="/contact">Contact</Link>}</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
