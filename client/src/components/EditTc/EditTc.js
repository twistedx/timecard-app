import React, { Fragment, useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import setAuthToken from '../../utils/setAuthToken';
import Navbar from '../Layout/Navbar/Navbar';
// import './editTc.css';



const EditTc = ({ match }) => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, [])


    if (localStorage.token) {
        setAuthToken(localStorage.token);
    } else {
        window.location.href = '/';
    }

    const token = authContext.token;
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    headers['x-auth-token'] = token;

    const tcid = match.params.id;

    console.log('this is the token and tcid', tcid, token)

    const [tc, setTc] = useState({
        clockIn: '',
        clockOut: '',
        lunchIn: '',
        lunchOut: '',
        breakIn: '',
        breakOut: ''
    });

    const { clockIn, clockOut, lunchIn, lunchOut, breakIn, breakOut } = tc;

    const onChange = e => setTc({ ...tc, [e.target.name]: e.target.value });

    const fetchTc = () => {

        fetch('/api/timecard/' + tcid, {
            method: 'GET',
            headers
        }).then(r => r.json())
            .then(r => {
                console.log('this is on the return of the fetchTc: ',JSON.stringify(r))
                let obj = r[0];
                let res = JSON.stringify(r[0]);
                if(obj){
                    setTc({
                    ...tc,
                    clockIn: obj.clockIn,
                    clockOut: obj.clockOut,
                    lunchIn: obj.lunchIn,
                    lunchOut: obj.lunchOut,
                    breakIn: obj.breakIn,
                    breakOut: obj.breakOut
                })
            console.log('new Tc state set')}
            }).catch(e => console.error('ERROR: ', e));
    }

    const deleteTc = (tcid) => {
        fetch('/api/timecard/' + tcid, {
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

    const editTc = (obj) => {
        var newObj = JSON.stringify(obj);
        fetch('/api/timecard/' + tcid, {
            method: 'PUT',
            body: newObj,
            headers
        }).then(r => r.json())
            .then(r => {
                let res = JSON.stringify(r[0]);
                console.log(`this is the second then after editTc fetch 
                ${res}`);
            })
            .catch(e => console.error('ERROR: ', e));
    }

    const onSubmit = e => {
        e.preventDefault();
        var temp = {
            ...tc,
            clockIn,
            clockOut,
            lunchIn,
            lunchOut,
            breakIn,
            breakOut
        };

        async function temp1() {
            let response = await editTc(temp);
            console.log(JSON.stringify(response), "sucess")
            setTimeout(() => {
                window.location.href = '/timecards/'+tcid;
            }, 1000);

        }
        temp1();
    }

    fetchTc();

    return (
        <Fragment>
            <Navbar title="Edit Timecard" dropdown={true} home={true} />
            <main>
                <h5 className="center">Timecard #{tcid}</h5>
                <div className="container">
                    <div className="card" style={{ borderRadius: "25px" }}>
                        <div className="card-content">
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <input id="clockIn" type="text" name='clockIn' placeholder="Clock In" value={clockIn} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <input id="clockOut" type="text" name='clockOut' placeholder="Clock Out" value={clockOut} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <input id="lunchIn" type="text" name='lunchIn' placeholder="Lunch In" value={lunchIn} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <input id="lunchOut" type="text" name='lunchOut' placeholder="Lunch Out" value={lunchOut} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <input id="breakIn" type="text" name='breakIn' placeholder="Break In" value={breakIn} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <input id="breakOut" type="text" name='breakOut' placeholder="Break Out" value={breakOut} onChange={onChange} />
                                </div>
                                <div className="center">
                                    <button type='submit' value='submit' id="editTc" className="waves-effect waves-light btn">Save</button>
                                    <button onClick={() => { deleteTc(tcid) }} id="deleteTc" className="btn waves-effect waves-light">Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

export default EditTc;