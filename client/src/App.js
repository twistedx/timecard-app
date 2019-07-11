import LoginPage from './components/LoginPage/Login/Login';
import Dashboard from './components/DashboardPage/Dashboard/Dashboard';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Register from './components/Register/Register';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import TimecardPage from './components/Timecard/TimecardPage';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Footer from './components/Layout/Footer/Footer';
import EditUser from './components/EditUser/EditUser';
import EditJob from './components/EditJob/EditJob';
import EditTc from './components/EditTc/EditTc';
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
        <Switch>
          <Route exact path='/' component={Dashboard} key={Dashboard.name} />
          <Route exact path='/about' component={About} key={About.name} />
          <Route exact path='/register' component={Register} key={Register.name} />
          <Route exact path='/login' component={LoginPage} key={LoginPage.name} />
          <Route exact path='/timecards/:id' component={TimecardPage} key={TimecardPage.name} />
          <Route exact path='/edituser' component={EditUser} key={EditUser.name} />
          <Route exact path='/editjob/:id/:jid' component={EditJob} key={EditJob.name} />
          <Route exact path='/edittc/:id/:jid' component={EditTc} key={EditTc.name} />
        </Switch>
        <Footer />
      </Router>
    </AuthState>
  )
}

export default App;
