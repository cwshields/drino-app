import React from 'react'
import logo from '../../assets/images/Drino-Logo.png'
import '../../assets/scss/drinoNavbar.scss'
import { Link } from 'react-router-dom'

export default function DrinoNavbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to='/'>
          <div className="logo-wrap">
            <img className="nav-img" src={logo} alt=""/>
            <div className="logo-name">Drino</div>
          </div>
        </Link>
        <div className="nav-link-wrap">
          <Link to=''>
            <div className="nav-link">Store</div>
          </Link>
          <Link to=''>
            <div className="nav-link">About</div>
          </Link>
          <Link to='/contact'>
            <div className="nav-link">Contact</div>
          </Link>
          <Link to=''>
            <div className="nav-link">Register</div>
          </Link>
          <Link to='/login'>
            <div className="nav-link">Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
}