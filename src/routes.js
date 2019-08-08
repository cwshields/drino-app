import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Drino from './components/Drino/Drino'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import EmployeeProfile from './components/Profiles/EmployeeProfile';
import Error404 from './components/Admin/Pages/Error404';
import Users from "./components/Admin/Users/Users";
import Messages from "./components/Admin/Messages/Messages";
import Maps from "./components/Admin/Maps/Maps"
// import Pages from "./components/Admin/Pages/"

export default (
  <Switch>
      <Route exact path='/' component={Drino} />
      <Route path='/login' component={Login} />
      <Route path='/profile' component={EmployeeProfile} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/users' render={Users} />
      <Route path='/messages' render={Messages} />
      <Route path='/maps' render={Maps} />
      {/* <Route path='/pages' render={Pages} /> */}
      <Route path='/' render={Error404} />
  </Switch>
)