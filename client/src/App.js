import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Login from './components/LoginPage/Login/Login.js';
import Dashboard from './components/DashboardPage/Dashboard/Dashboard.js';

const App = () => {

  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });

  return (
    <Router>
      <Fragment>
        <Login />
        <Dashboard />
      </Fragment>
    </Router>
  );
}

export default App;
