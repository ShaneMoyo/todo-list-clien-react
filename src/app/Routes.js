import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Auth from '../components/auth/Auth';

export default () => (
  <Switch>
    <Route path="/auth" render={() => <Auth/>}/>
    <Redirect to="/"/>
  </Switch>
);
