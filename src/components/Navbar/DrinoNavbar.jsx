import React from "react";
import "../../assets/scss/drinoNavbar.scss";
import logo from "../../assets/images/Drino-Logo.png";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../Redux/reducer";

function DrinoNavbar(props) {
  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to="/">
          <div className="logo-wrap">
            <img className="nav-img" src={logo} alt="" />
            <div className="logo-name">Drino</div>
          </div>
        </Link>
        <div className="nav-wrap">
          <div className="nav-right-wrap">
            <Link to="/">
              <div className="nav-link">Store</div>
            </Link>
            <Link to="/about">
              <div className="nav-link">About</div>
            </Link>
            <Link to="/contact">
              <div className="nav-link">Contact</div>
            </Link>
          </div>
          {props.login && props.isAdmin ? 
            <div className="nav-link-wrap">
              <Link to="/dashboard/home">
                <div className="nav-link">Dashboard</div>
              </Link>
              <Link to="/" onClick={props.logout}>
                <div className="nav-link">Logout</div>
              </Link>
            </div>
          : props.login && props.isEmployee === false ?
            <div className="nav-link-wrap">
              <Link to="/">
                <div className="nav-link">Profile</div>
              </Link>
              <Link to="/" onClick={props.logout}>
                <div className="nav-link">Logout</div>
              </Link>
            </div>
          : props.login && props.isAdmin === false ?
            <div className="nav-link-wrap">
              <Link to="/profile">
                <div className="nav-link">Profile</div>
              </Link>
              <Link to="/" onClick={props.logout}>
                <div className="nav-link">Logout</div>
              </Link>
            </div>
          : <div className="nav-link-wrap">
              <Link to="/register">
                <div className="nav-link">Register</div>
              </Link>
              <Link to="/login">
                <div className="nav-link">Login</div>
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    login: reduxState.reducer.login,
    isAdmin: reduxState.reducer.isAdmin,
    isEmployee: reduxState.reducer.isEmployee,
  };
}

export default connect(mapStateToProps, { logout })(DrinoNavbar);
