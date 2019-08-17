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
import Error500 from '../Pages/Error500'
import axios from 'axios'
import { connect } from 'react-redux';
import { updateSession } from '../../../Redux/reducer';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    axios.get('/api/user')
    .then(res => {
      this.props.updateSession(res.data)
    })
    .catch(err => console.log(err))
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
          <Route path='#/404' render={Error404} />
          <Route path='#/500' render={Error500} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    firstName: reduxState.reducer.firstName,
    lastName: reduxState.reducer.lastName,
    username: reduxState.reducer.username,
    email: reduxState.reducer.email,
    isAdmin: reduxState.reducer.isAdmin,
    isEmployee: reduxState.reducer.isEmployee,
    img: reduxState.reducer.img,
    login: reduxState.reducer.login
  }
}

export default connect(mapStateToProps, { updateSession })(Dashboard);
