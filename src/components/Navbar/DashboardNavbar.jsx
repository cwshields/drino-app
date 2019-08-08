import React from 'react';
import { NavLink } from "react-router-dom";
import '../../assets/scss/sidenavbar.scss';

export default function DashboardNavbar() {
  return (
    <nav>
      <div className='nav-group'>
        <NavLink to='/dashboard' className='nav-link' activeClassName='selected'>
          <div><i class="fas fa-tachometer-alt"></i> Dashboard</div>
        </NavLink>
        <NavLink to='/clients' className='nav-link' activeClassName='selected'>
          <div><i class="fas fa-users"></i> Clients</div>
        </NavLink>
        <NavLink to='/employees' className='nav-link' activeClassName='selected'>
          <div><i class="fas fa-address-card"></i> Employees</div>
        </NavLink>
        <NavLink to='/messages' className='nav-link' activeClassName='selected'>
          <div><i class="fas fa-comment-alt"></i> Messages</div>
        </NavLink>
        <NavLink to='/contact' className='nav-link' activeClassName='selected'>
          <div><i class="fas fa-envelope"></i> Contact</div>
        </NavLink>
      </div>
    </nav>
  );
}