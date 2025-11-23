import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; 
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logo" className="navbar-logo" />
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/review'>Review</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
