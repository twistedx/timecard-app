import LoginPage from './components/LoginPage/Login/Login';
import Dashboard from './components/DashboardPage/Dashboard/Dashboard';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Register from './components/Register/Register';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Footer from './components/Layout/Footer/Footer';
import Navbar from './components/Layout/Navbar/Navbar';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    M.AutoInit();
    //eslint-disable-next-line
  }, []);

  return (
    <AuthState>
      <Router>
        <Navbar title="Timecard App" />
        <body>
          <Switch>
            <Route exact path='/' component={Dashboard} key={Dashboard.name} />
            <Route exact path='/about' component={About} key={About.name} />
            <Route exact path='/register' component={Register} key={Register.name} />
            <Route exact path='/login' component={LoginPage} key={LoginPage.name} />
          </Switch>
        </body>
      </Router>
      <Footer />
    </AuthState>
  )
}

export default App;
