/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import History from './pages/history';
import Sentence from './pages/sentence';
import View from './pages/view';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/history" component={History} />
      <Route path="/sentence/:insert" component={Sentence} />
      <Route path="/sentence" component={Sentence} />
      <Route path="/view/:id" component={View} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
