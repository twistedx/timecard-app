import React from 'react';
import './CreateNewBtn.css';
import moment from 'moment';

const CreateNewBtn = (props) => {
  const jobId = props.jid;
  const headers = props.h;
  const token = props.token;
  const date = moment(new Date()).utc().format();
  const body = {
    date,
    clockIn: date
  }

  console.log(`
  
  this is the JID in the CreateNewBtn component:
  ${jobId}


  this is the body:
  ${JSON.stringify(body)}
  
  
  `)

  const newTc = () => {
    //fetch request
    fetch(`/api/timecard/${jobId}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers
    })
        .then(r => {
            console.log(r);
            return r.json();
        })
        .then(r => {
            console.log(r);
        })
        .catch(e => console.error('ERROR: ', e));
        window.location.reload();
}





  return (
    <div className="container">
      <div className="row" id = 'margin-top'>
        <div className="col s12 m12 l12 center">
          <button className="btn-floating btn-large waves-effect waves-light blue hoverable" onClick = {() => newTc()}><i className="material-icons">add_alarm</i></button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewBtn;
