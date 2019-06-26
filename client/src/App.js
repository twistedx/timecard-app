import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage.js';

const App = () => {
  
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <LoginPage />
    </Fragment>
  );
}

export default App;
