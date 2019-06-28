import LoginPage from './components/LoginPage/LoginPage.js';
import React, { Fragment, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import AlertState from './context/alert/AlertState'
import Alerts from './components/layout/Alerts';
import AuthContext from '../../context/auth/AuthContext';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
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
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={LoginPage} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  )
}



export default App;
