import React, { useState, useEffect, Fragment } from 'react';
import './JobModal.css';

const JobModal = () => {
    const [ addJob, setAddJob ] = useState(false);
    const mod = document.getElementById('modal');

    useEffect( () => { document.getElementById('modal').style.display = 'none' }, [] )

    const ajCheck = () => {
        if(addJob){
            mod.style.display = 'none';
            setAddJob(false);
        } else {
            mod.style.display = 'block';
            setAddJob(true);
        }
    }



    return (
        <Fragment>
            <button id = 'addJobBtn' onClick = { () => ajCheck() } className="btn-floating btn-large waves-effect waves-light blue">
                <i className="material-icons">add</i>
            </button>

            <div id = 'modal' className = 'center valign-wrapper'>
                {/* <button id = 'close' onClick = { () => ajCheck() }>x</button>  */}
                <button id = 'close' onClick = { () => ajCheck() } className="btn-floating btn-small waves-effect waves-light blue">
                <i className="material-icons center valign-wrapper">close</i>
            </button>
                <div className="container">
        <form>
          <div className="form-group">
            <input id="company" type="text" class="validate" />
            <label htmlFor="company">Company</label>
          </div>
          <div className="form-group">
            <input id="role" type="text" class="validate" />
            <label htmlFor="role">Role</label>
          </div>
          <div className="form-group">
            <select>
              <option value="" disabled selected>
                Job Type:
              </option>
              <option value="1">Hourly Rate</option>
              <option value="1">Salary/Day Rate</option>
              <option value="1">Fixed Project Rate</option>
            </select>
          </div>
            <label htmlFor="select-job-type">Select Job Type</label>
            <button className="btn-floating btn-small waves-effect waves-light blue">
                <i className="material-icons center valign-wrapper">send</i>
            </button>
        </form>
      </div>
            </div>
        </Fragment>
    );
}
export default JobModal;