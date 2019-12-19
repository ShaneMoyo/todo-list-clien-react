import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Auth from '../components/auth/Auth';
import Landing from '../components/landing/landing';
import Todos from '../components/todos/Todos'
import NewTodo from '../components/todos/NewTodo'


export default () => (
  <Switch>
    <Route exact path="/" render={() => <Landing/>}/>;
    <Route path="/auth" render={() => <Auth/>}/>
    <Route path="/auth" render={() => <Auth/>}/>
    <PrivateRoute exact path="/todos/me" render={() => <Todos/>}/>;
    <PrivateRoute exact path="/todos/new" render={() => <NewTodo/>}/>;
    <PrivateRoute exact path="/todos/edit/:id" render={() => <NewTodo/>}/>;
    <Redirect to="/"/>
  </Switch>
);
