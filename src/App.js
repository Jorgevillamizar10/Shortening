import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layaout from './components/Layaout';
import Home from './containers/Home';
import LoginC from './containers/LoginC';
import SignUpC from './containers/SignUpC';
import { User } from './containers/User';
import { NotFound } from './containers/NotFound';
import { OnWork } from './containers/OnWork';
import Context from './Context';

export const App = () => (
  <BrowserRouter>
    <Layaout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/features' component={OnWork} />
        <Route exact path='/pricing' component={OnWork} />
        <Route exact path='/resources' component={OnWork} />
        <Context.Consumer>
          {({ isAuth }) => (
            <Switch>
              <Route exact path='/user'>
                {isAuth ? User : <Redirect to='/login' />}
              </Route>
              <Route exact path='/login'>
                {!isAuth ? LoginC : <Redirect to='/user' />}
              </Route>
              <Route exact path='/signup'>
                {!isAuth ? SignUpC : <Redirect to='/user' />}
              </Route>
              <Route default component={NotFound} />
            </Switch>
          )}
        </Context.Consumer>
      </Switch>
    </Layaout>
  </BrowserRouter>
);
