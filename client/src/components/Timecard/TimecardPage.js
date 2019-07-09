import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext';
import { useHttp } from '../Hooks/Fetch';
import setAuthToken from '../../utils/setAuthToken';
import CreateNewBtn from './CreateNewBtn';
import TcList from './TcList';
import loadingImg from '../../img/loading.gif';
import './TimecardPage.css';
import Navbar from '../Layout/Navbar/Navbar';

const TimecardPage = ( {match} ) => {
  const authContext = useContext(AuthContext);
  
      useEffect(() => {
          authContext.loadUser();
          authContext.setAppName("Dashboard");
          // eslint-disable-next-line
      }, [])
  
  
      if (localStorage.token) {
          setAuthToken(localStorage.token);
      } else {
          window.location.href = '/';
      }
  
  
      console.log(`
      this is the token:
      ${authContext.token}
      
      `)
  


  
      // const loading = 'loading . . .';
      const loading = 'loading . . .';
      const [tc, setTc] = useState(loading)
      const tcLoadingChecker = (arr) => { arr[0] ? setTc(arr) : setTc(loading) };
  
      const token = authContext.token;
      let h = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
      h['x-auth-token'] = token;
      const jid = match.params.id;
      console.log(`
      
      this is the JID:
      ${jid}
      
      
      `)

      //fetch timecards ==============================================================================================
      let fetchedTc = useHttp('http://localhost:5000/api/timecard/'+jid, 'GET', '', h, []);
      const tcloading = fetchedTc[0];
      const t = fetchedTc[1];
  
      useEffect(() => tcLoadingChecker(t), [t]);
  
      console.log(`
          
          this is timecards
          ${JSON.stringify(t)}
          
          `);

  console.log(`
  
  this is the params id!!!!!
  ${match.params.id}
  `)


  return [
    <div>
      <Navbar title="Timecards" dropdown = { false } home = { true } />
      <main>
        <body>
          <CreateNewBtn jid = {jid} token = {token} h = {h}/>
          {tc === loading ? <img src = {loadingImg} style = {{height: '200px', width: '200px', position: 'absolute', top: 'calc(50% - 100px', left: 'calc(50% - 100px'}}/> : tc.map((v, i) => {
                        return <TcList
                        key = { i }
                        tcId = { v._id }
                        date = { v.date }
                        clockIn = { v.clockIn }
                        clockOut = { v.clockOut || '' }
                        lunchIn = { v.lunchIn || '' }
                        lunchOut = { v.lunchOut || '' }
                        breakIn = { v.breakIn || '' }
                        breakOut = { v.breakOut || '' }
                        />
                    })
                    }

          {/* <TcList jobId = {match.params.id}/> */}
        </body>
      </main>
    </div>
  ];
};

export default TimecardPage;