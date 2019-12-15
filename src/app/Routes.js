import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Auth from '../components/auth/Auth';
import Landing from '../components/landing/landing';

export default () => (
  <Switch>
    <Route exact path="/" render={() => <Landing/>}/>;
    <Route path="/auth" render={() => <Auth/>}/>
    <Redirect to="/"/>
  </Switch>
);
