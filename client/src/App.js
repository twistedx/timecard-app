import LoginPage from './Components/LoginPage/Login/Login';
import Dashboard from './Components/DashboardPage/Dashboard/Dashboard';
import React, { Fragment, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar/Navbar';
import About from './Components/pages/About';
import Register from './Components/Register/Register';
import AuthContext from './context/auth/AuthContext';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import TimecardPage from './Components/Timecard/TimecardPage';
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
  )
}



export default App;
