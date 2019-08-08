import React, { Component } from 'react'
import { HashRouter } from "react-router-dom";
import Header from '../../Navbar/Header'
import Navbar from '../../Navbar/DashboardNavbar'
import '../../../assets/scss/App.scss'
import routes from '../../../routes'

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="dashboard">
        <HashRouter>
          <Header></Header>
          <Navbar></Navbar>
          <div className='all-card-tags'>
            {routes}
          </div>
        </HashRouter>
      </div>
    );
  }
}
