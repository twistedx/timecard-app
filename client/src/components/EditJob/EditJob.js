import React, { Fragment, useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import setAuthToken from '../../utils/setAuthToken';
import Navbar from '../Layout/Navbar/Navbar';
import './EditJob.css';
const EditJob = ({ match }) => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        fetchJob();
        // eslint-disable-next-line
    }, [])


    if (localStorage.token) {
        setAuthToken(localStorage.token);
    } else {
        window.location.href = '/';
    }

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    headers['x-auth-token'] = authContext.token;

    const jid = match.params.id;

    const [job, setJob] = useState({
        name: '',
        role: '',
        jobType: '',
        description: ''
    });

    const { name, role, jobType, description } = job;

    const onChange = e => setJob({ ...job, [e.target.name]: e.target.value });

    const fetchJob = () => {
        //formmatting form responses into payload obj

        fetch('/api/job/' + jid, {
            method: 'GET',
            headers
        }).then(r => r.json())
            .then(r => {
                let res = JSON.stringify(r[0]);
                setJob({
                    ...job,
                    name: r[0].name,
                    role: r[0].role,
                    jobType: r[0].jobType,
                    description: r[0].description
                })
            }).catch(e => console.error('ERROR: ', e));
    }

    const deleteJob = (jid) => {
        var tempArr = [];
        fetch('/api/timecard/' + jid, {
            method: 'GET',
            headers
        }).then(res => {
            return res.json();
        }).then(data => {
            data.forEach(function (arrayItem) {
                var x = arrayItem._id;
                tempArr.push(x);
            });
            for (let i = 0; i < tempArr.length; i++) {
                deleteTc(tempArr[i]);
            }
        })
        deleteThisJob(jid);
    }

    const deleteTc = (itemToDelete) => {
        fetch('/api/timecard/' + itemToDelete, {
            method: 'DELETE',
            headers
        }).then(r => r.json())
            .then(res => {
                return res;
            }).then(data => {
                console.log(data)
            })
            .catch(e => console.error('ERROR: ', e));
    }

    const deleteThisJob = (jid) => {
        fetch('/api/job/' + jid, {
            method: 'DELETE',
            headers
        }).then(data => {
            return data.json();
        }).then(res => {
            console.log(res);
        }).catch(e => console.error('ERROR: ', e));
    }

    const editJob = (obj) => {
        //formmatting form responses into payload obj
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        headers['x-auth-token'] = authContext.token;
        var newObj = JSON.stringify(obj);
        fetch('/api/job/' + jid, {
            method: 'PUT',
            body: newObj,
            headers
        }).then(r => r.json())
            .then(r => {
                let res = JSON.stringify(r[0]);
                console.log(`this is the second then after editJob fetch 
                ${res}`);
            })
            .catch(e => console.error('ERROR: ', e));
    }

    const onSubmit = e => {
        e.preventDefault();
        var temp = {
            ...job,
            name,
            role,
            jobType,
            description
        };

        async function temp1() {
            let response = await editJob(temp);
            console.log(JSON.stringify(response), "sucess")
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);

        }
        temp1();
    }

    return (
        <Fragment>
            <Navbar title="Edit Job" dropdown={true} home={true} />
            <main>
                <h5 className="center">Job #{jid}</h5>
                <div className="container">
                    <div className="card" style={{ borderRadius: "25px" }}>
                        <div className="card-content">
                            <div id='title'> Add a New Job </div>
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <input id="company" type="text" name='name' placeholder="job name" required value={name} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <input id="role" type="text" name='role' placeholder="role" required value={role} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <select className="browser-default" name='jobType' value={jobType} onChange={onChange}>
                                        <option value="job" disabled />
                                        <option value="hourly">Hourly Rate</option>
                                        <option value="salary">Salary/Day Rate</option>
                                        <option value="fixed">Fixed Project Rate</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input id="description" type="text" name='description' placeholder="description" required value={description} onChange={onChange} />
                                </div>
                                <div className="center">
                                    <button type='submit' value='submit' id="editJob" className="waves-effect waves-light btn">Save</button>
                                    <button onClick={() => { deleteJob(jid) }} id="deleteJob" className="btn waves-effect waves-light">Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

export default EditJob;