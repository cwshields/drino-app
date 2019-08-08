import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Header from '../../Navbar/Header'
import Navbar from '../../Navbar/DashboardNavbar'
import '../../../assets/scss/dashboard.scss'
import Users from "../Users/Users";
import Messages from "../Messages/Messages";
import Maps from "../Maps/Maps"
import Home from "../Dashboard/Home"

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="dashboard">
        <Header></Header>
        <Navbar></Navbar>
        <div className='dash-body'>
          <div className="dash-section">
            <Switch>
              <Route path='/dashboard/home' component={Home} />
              <Route path='/dashboard/users' component={Users} />
              <Route path='/dashboard/messages' component={Messages} />
              <Route path='/dashboard/maps' component={Maps} />
              {/* <Route path='/pages' Component={Pages} /> */}
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
