import React from 'react';
import { NavLink } from "react-router-dom";
import '../../assets/scss/dashNavbar.scss';
import { Dropdown } from 'react-bootstrap';

export default function DashboardNavbar() {
  return (
    <nav>
      <div className='nav-group'>
        <NavLink exact to='/dashboard/home' className='nav-link' activeClassName='selected'>
          <div className="nav-link-wrap">
            <div className="nav-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </div>
        </NavLink>
        <NavLink to='/dashboard/users' className='nav-link' activeClassName='selected'>
          <div className="nav-link-wrap">
            <div className="nav-icon">
              <i className="fas fa-users"></i>
            </div>
            Users
          </div>
        </NavLink>
        <NavLink to='/dashboard/messages' className='nav-link' activeClassName='selected'>
          <div className="nav-link-wrap">
            <div className="nav-icon">
              <i className="fas fa-comment-alt"></i>
            </div>
            Messages
          </div>
        </NavLink>
        <NavLink to='/dashboard/maps' className='nav-link' activeClassName='selected'>
          <div className="nav-link-wrap">
            <div className="nav-icon">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            Maps
          </div>
        </NavLink>
        <Dropdown>
          <Dropdown.Toggle className="nav-link" variant="" id="dropdown-basic">
            <div className="nav-link-wrap">
              <div className="nav-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              Pages
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/404">
              <div className="nav-link-wrap">
                <div className="nav-icon">
                  <i className="far yellow fa-circle"></i>
                </div>
                404 Error
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="/500">
              <div className="nav-link-wrap">
                <div className="nav-icon">
                  <i className="far red fa-circle"></i>
                </div>
                500 Error
              </div>
            </Dropdown.Item>
            <Dropdown.Item to="/dashboard/profile">
              <div className="nav-link-wrap">
                <div className="nav-icon">
                  <i className="fas fa-user-circle"></i>
                </div>
                Profile
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="/dashboard/register">
              <div className="nav-link-wrap">
                <div className="nav-icon">
                  <i className="fas fa-edit"></i>
                </div>
                Register
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}