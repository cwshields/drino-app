import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Drino from './components/Drino/Drino'
import Contact from './components/Contact/Contact';
import Dashboard from './components/Admin/Dashboard/Dashboard'
import EmployeeProfile from './components/Profiles/EmployeeProfile'
import Error404 from './components/Admin/Pages/Error404'
import About from './components/About/About';

export default (
  <Switch>
    <Route exact path='/' component={Drino} />
    <Route path='/login' component={Login} />
    <Route path='/profile' component={EmployeeProfile} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/contact' component={Contact} />
    <Route path='/about' component={About} />
    <Route path='/' render={Error404} />
    <Route path='/dashboard/404' render={Error404} />
  </Switch>
)