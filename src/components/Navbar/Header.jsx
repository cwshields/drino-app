import React from 'react'
import logo from '../../assets/images/Drino-Logo.png'
import img from '../../assets/images/profile-img.png'
import '../../assets/scss/header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header-navbar">
      <div className="nav-container">
        <Link to='/'>
          <div className="logo-wrap">
            <img className="nav-img" src={logo} alt="Logo" />
            <div className="logo-name-header">Drino</div>
          </div>
        </Link>
        <div className="header-right-wrap">
          <Link to="/login">
            <div className="nav-link">Logout</div>
          </Link>
          <img className="nav-img" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}