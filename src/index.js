import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import LandingPage from './pages/LandingPage';
import PageNotFound from './pages/PageNotFound';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router history={browserHistory}>
      <Route path="/" component={LandingPage}></Route>
      <Route path="/buscador" component={LandingPage}></Route>
      <Route path="*" component={PageNotFound}></Route>
    </Router>
  </>
);
