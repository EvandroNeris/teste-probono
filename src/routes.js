/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import History from './pages/history';
import Sentence from './pages/sentence';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/history" component={History} />
      <Route path="/sentence" component={Sentence} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
