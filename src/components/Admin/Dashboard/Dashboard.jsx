import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import Header from '../../Navbar/Header'
import Navbar from '../../Navbar/DashboardNavbar'
import '../../../assets/scss/dashboard.scss'
import Users from "../Users/Users"
import Messages from "../Messages/Messages"
import Maps from "../Maps/Maps"
import Home from "../Dashboard/Home"
import Error404 from '../Pages/Error404'

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
        <Switch>
          <Route path='/dashboard/home' component={Home} />
          <Route path='/dashboard/users' component={Users} />
          <Route path='/dashboard/messages' component={Messages} />
          <Route path='/dashboard/maps' component={Maps} />
          {/* <Route path='/pages' Component={Pages} /> */}
          <Route path='/404' render={Error404} />
        </Switch>
      </div>
    );
  }
}
