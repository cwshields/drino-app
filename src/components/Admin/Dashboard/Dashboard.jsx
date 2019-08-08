import React, { Component } from 'react'
import Header from '../../Navbar/Header'
import Navbar from '../../Navbar/DashboardNavbar'
import '../../../assets/scss/App.scss'

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
      </div>
    );
  }
}
