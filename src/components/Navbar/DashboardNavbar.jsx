import React from 'react';
import { NavLink } from "react-router-dom";
import '../../assets/scss/sidenavbar.scss';
import { Dropdown } from 'react-bootstrap';

export default function DashboardNavbar() {
  return (
    <nav>
      <div className='nav-group'>
        <NavLink exact to='/dashboard/home' className='nav-link' activeClassName='selected'>
          <div className="nav-link-wrap">
            <div className="nav-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </div>
        </NavLink>
        <NavLink to='/dashboard/users' className='nav-link' activeClassName='selected'>
          <div className="nav-link-wrap">
            <div className="nav-icon">
              <i class="fas fa-users"></i>
            </div>
            Users
          </div>
        </NavLink>
        <NavLink to='/dashboard/messages' className='nav-link' activeClassName='selected'>
          <div className="nav-link-wrap">
            <div className="nav-icon">
              <i class="fas fa-comment-alt"></i>
            </div>
            Messages
          </div>
        </NavLink>
        <NavLink to='/dashboard/maps' className='nav-link' activeClassName='selected'>
          <div className="nav-link-wrap">
            <div className="nav-icon">
              <i class="fas fa-map-marked-alt"></i>
            </div>
            Maps
          </div>
        </NavLink>
        <Dropdown>
          <Dropdown.Toggle className="nav-link" variant="" id="dropdown-basic">
            <div className="nav-link-wrap">
              <div className="nav-icon">
                <i class="fas fa-file-alt"></i>
              </div> Pages
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/action-1"><i class="far red fa-circle"></i> 404 Error</Dropdown.Item>
            <Dropdown.Item href="/action-2"><i class="far yellow fa-circle"></i> 500 Error</Dropdown.Item>
            <Dropdown.Item href="/action-3"><i class="far blue fa-circle"></i> Profile</Dropdown.Item>
            <Dropdown.Item href="/action-4"><i class="far green fa-circle"></i> Register</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}