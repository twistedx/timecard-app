import LoginPage from './components/LoginPage/Login/Login';
import React, { Fragment, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Register from './components/Register/Register';
import AuthContext from './context/auth/AuthContext';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import AlertState from './context/alert/AlertState';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  const authContext = useContext(AuthContext);

  useEffect(() => {
    M.AutoInit();
    // authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path='/' component={LoginPage} />
              <Route exact path='/about' component={About} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={LoginPage} />
            </Switch>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  )
}



export default App;
