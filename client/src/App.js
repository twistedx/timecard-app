import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import TestRouter from './components/testrouter/router.js';
import LoginPage from './components/LoginPage/LoginPage.js';



const App = () => {
// initiating materialize
useEffect(() => {
  //Init Materialize JS
  M.AutoInit();
});

  return (
    <Fragment>
      {/* admin test router */}
      <div style= {{marginTop: '100px'}}>
      <TestRouter />
      </div>
    </Fragment>
  );
}

export default App;
