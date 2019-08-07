import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Drino from './components/Drino/Drino';



export default (
  <Switch>
      <Route path='/login' component={Login} />
      <Route exact path='/' component={Drino} />
      <Route path='/' render={() => <h1>404 Page not Found.</h1>} />
  </Switch>
)