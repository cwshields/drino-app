import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Drino from './components/Drino/Drino'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import EmployeeProfile from './components/Profiles/EmployeeProfile'
import Error404 from './components/Admin/Pages/Error404'

export default (
  <Switch>
    <Route exact path='/' component={Drino} />
    <Route path='/login' component={Login} />
    <Route path='/profile' component={EmployeeProfile} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/' render={Error404} />
    <Route path='/dashboard/404' render={Error404} />
  </Switch>
)