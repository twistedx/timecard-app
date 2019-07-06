import React, { useState, useEffect, useContext, Fragment } from 'react';
import './JobModal.css';
import { useHttp } from '../Hooks/Fetch';

const JobModal = props => {
  const [addJob, setAddJob] = useState(false);
  const mod = document.getElementById('modal');

  useEffect(() => { document.getElementById('modal').style.display = 'none' }, []);

  const ajCheck = () => {
    if (addJob) {
      mod.style.display = 'none';
      setAddJob(false);
    } else {
      mod.style.display = 'block';
      setAddJob(true);
    }
  }




  //setting state for values of form =====================================================
  const [submitted, setSubmitted] = useState(false);
  const [newJob, setNewJob] = useState({
    name: '',
    role: '',
    jobType: '',
    description: ''
  });

  const { name, role, jobType, description } = newJob;

  const onChange = e => setNewJob({ ...newJob, [e.target.name]: e.target.value });




  const onSubmit = e => {
    e.preventDefault();
    console.log(newJob);
    setSubmitted(true);
  };

  let h = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  h['x-auth-token'] = props.token;



  let fetchedJobs = useHttp('http://localhost:5000/api/job', 'POST', JSON.stringify(newJob), h, [submitted]);
  const j = fetchedJobs[1];

  if (submitted) {
    console.log(`
      
        this is the j return: ${JSON.stringify(j)}
        
        
        this is the new job obj: ${newJob}`)

    window.location.reload();
  }






  return (
    <Fragment>
      <button id='addJobBtn' onClick={() => ajCheck()} className="btn-floating btn-large waves-effect waves-light blue">
        <i className="material-icons">add</i>
      </button>

      <div id='modal' className='center valign-wrapper'>
        <button id='close' onClick={() => ajCheck()} className="btn-floating btn-small waves-effect waves-light blue">
          <i className="material-icons center valign-wrapper">close</i>
        </button>




        <div className="container">
          <div id='title'> Add a New Job </div>


          <form onSubmit={onSubmit}>

            <div className="form-group">
              <input id="company" type="text" name='name' placeholder="job name" required value={name} onChange={onChange} />
              <label htmlFor="company">Company</label>
            </div>

            <div className="form-group">
              <input id="role" type="text" name='role' placeholder="role" required value={role} onChange={onChange} />
              <label htmlFor="role">Role</label>
            </div>

            <div className="input-field">
              <select name='jobType' value={jobType} onChange={onChange}>
                <option value="" disabled selected >
                  Job Type:
                    </option>
                <option value="hourly">Hourly Rate</option>
                <option value="salary">Salary/Day Rate</option>
                <option value="fixed">Fixed Project Rate</option>
              </select>
            </div>
            <label htmlFor="select-job-type">Select Job Type</label>

            <div className="form-group">
              <input id="description" type="text" name='description' placeholder="description" required value={description} onChange={onChange} />
              <label htmlFor="description">Description</label>
            </div>

            <div>
              <button type='submit' value='submit' className="btn-floating btn-small waves-effect waves-light blue">
                <i className="material-icons center valign-wrapper">send</i>
              </button>
            </div>

          </form>






        </div>
      </div>
    </Fragment>
  );
}
export default JobModal;