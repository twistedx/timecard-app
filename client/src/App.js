<<<<<<< HEAD
import LoginPage from './Components/LoginPage/Login/Login';
import Dashboard from './Components/DashboardPage/Dashboard/Dashboard';
import React, { Fragment, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar/Navbar';
import About from './Components/pages/About';
import Register from './Components/Register/Register';
import AuthContext from './context/auth/AuthContext';
=======
import LoginPage from './components/LoginPage/Login/Login';
import Dashboard from './components/DashboardPage/Dashboard/Dashboard';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Register from './components/Register/Register';
>>>>>>> 32cc4cad29dfcce3475fec3b716aebfd0725190c
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import TimecardPage from './Components/Timecard/TimecardPage';
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
<<<<<<< HEAD
    // <AuthState>
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/dash' component={Dashboard} />
          <Route exact path='/timecards' component={TimecardPage} />
        </Switch>
      </Fragment>
    </Router>
    // </AuthState>
=======
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
>>>>>>> 32cc4cad29dfcce3475fec3b716aebfd0725190c
  )
}

export default App;
