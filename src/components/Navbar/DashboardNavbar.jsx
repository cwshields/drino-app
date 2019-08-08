import React from 'react';
import { NavLink } from "react-router-dom";
import '../../assets/scss/sidenavbar.scss';

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
        <NavLink to='/dashboard/pages' className='nav-link' activeClassName='selected'>
          <div className="nav-link-wrap">
            <div className="nav-icon">
              <i class="fas fa-file-alt"></i>
            </div> 
            Pages
          </div>
        </NavLink>
      </div>
    </nav>
  );
}