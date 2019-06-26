import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './components/LoginPage/LoginPage.js';
import Dashboard from './components/Dashboard/Dashboard.js';

const App = () => {
  
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      {/* <LoginPage /> */}
      <Dashboard />
    </Fragment>
  );
}

export default App;
