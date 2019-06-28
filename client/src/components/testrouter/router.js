import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage.js';
import DashPage from '../Dash/DashPage.js';



//Temp Routes
function Dash() {
  return <h2>Dash</h2>;
}

function Jobs() {
  return <h2>Jobs</h2>;
}

function Timecards() {
  return <h2>Timecards</h2>;
}




const TestRouter = () => {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/dash/">Dash</Link>
            </li>
            <li>
              <Link to="/jobs/">Jobs</Link>
            </li>
            <li>
              <Link to="/timecards/">Timecards</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={LoginPage} />
        <Route path="/dash/" component={DashPage} />
        <Route path="/jobs/" component={Jobs} />
        <Route path="/timecards/" component={Timecards} />
      </div>
    </Router>
  );
}

export default TestRouter;
