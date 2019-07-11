import React, { Fragment, useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import setAuthToken from '../../utils/setAuthToken';
import Navbar from '../Layout/Navbar/Navbar';
import moment from 'moment';
import './EditTc.css';



const EditTc = ({ match }) => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        fetchTc();
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
    const jid = match.params.jid;
    const [tcDate, setTcDate] = useState(moment().local().format('LL'));

    console.log('this is the token and tcid', tcid, token)

    const [tc, setTc] = useState({
        clockIn: '',
        clockOut: '',
        lunchIn: '',
        lunchOut: '',
        breakIn: '',
        breakOut: '',
    });

    const { clockIn, clockOut, lunchIn, lunchOut, breakIn, breakOut } = tc;
    

    const onChange = e => {
        setTc({ ...tc, [e.target.name]: e.target.value })
};

    const fetchTc = () => {

        fetch('/api/timecard/tc/' + tcid, {
            method: 'GET',
            headers
        }).then(r => r.json())
            .then(r => {
                let obj = r[0];
                let res = JSON.stringify(r[0]);
                if(obj){
                    console.log('THIS IS THE MOMENT DATE PULLED FROM FETCH AND FORMATTED:    ', moment(obj.date).format('LL'))
                    setTcDate(moment(obj.date).format('LL'));
                    console.log('THIS IS TC DATE:     ', tcDate)
                    setTc({
                    ...tc,
                    clockIn: formatter(obj.clockIn),
                    clockOut: formatter(obj.clockOut),
                    lunchIn: formatter(obj.lunchIn),
                    lunchOut: formatter(obj.lunchOut),
                    breakIn: formatter(obj.breakIn),
                    breakOut: formatter(obj.breakOut)
                })
            console.log('new Tc state set')}
            }).catch(e => console.error('ERROR: ', e));
    }

    const formatter = time => {
        if(time){
            return moment(time).local().format('LT')
        } else {
            return ''
        }
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

    const timeFormatter = time => {
        console.log('this is the time input for time formatter: ', time)
        if(time){
            let tArr = time.split('');
            let hTest = tArr.slice(0,2).join('');
            let mTest = tArr.slice(tArr.indexOf(':') + 1, tArr.indexOf(':') + 3).join('');
            console.log('this is mtest     ', tArr)

            // format for hours
            let h = (
                !Number.isInteger(parseInt(hTest)) ?
                false : 
                parseInt(hTest).toString().length === 2 && parseInt(hTest) <= 12 ?
                hTest :
                parseInt(hTest).toString().length === 1 ?
                '0' + parseInt(hTest).toString() :
                '12'
            );
            console.log( 'this is the hours of the timeformatter: ', h);

            // format for min
            let m = (
                !Number.isInteger(parseInt(mTest)) ?
                false : 
                parseInt(mTest).toString().length === 2 && parseInt(mTest) < 60 ?
                mTest :
                parseInt(mTest).toString().length === 1 ?
                '0' + parseInt(mTest).toString() :
                ((parseInt(mTest) - 60).toString()).length === 2 ?
                (parseInt(mTest) - 60).toString() :
                '0' + ((parseInt(mTest) - 60).toString())
            )
            console.log(' this is the mins of the timeformatter: ', m);

            //check for am or pm
            let ampm = (
                tArr.indexOf('a') > 0 ?
                'AM' :
                tArr.indexOf('A') > 0 ?
                'AM' :
                tArr.indexOf('P') > 0 ?
                'PM' :
                tArr.indexOf('p') > 0 ?
                'PM' :
                false
            )
            console.log(' this is the AMPM of the timeformatter: ', ampm);

            
            return h && m && ampm ? h + ':' + m + ' ' + ampm : false;
        }
       
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
        console.log('THIS IS THE TC DATE INSIDE ON SUBMIT   :   ', tcDate)
        console.log("this is the moment version of clock in :   ", moment(tcDate + ' ' + timeFormatter(clockIn)).utc());

        var temp = { ...tc }

        if(clockIn) {temp.clockIn = moment(tcDate + ' ' + timeFormatter(clockIn)).utc()}
        if(clockOut) {temp.clockOut = moment(tcDate + ' ' + timeFormatter(clockOut)).utc()}
        if(lunchIn) {temp.lunchIn = moment(tcDate + ' ' + timeFormatter(lunchIn)).utc()}
        if(lunchOut){temp.lunchOut = moment(tcDate + ' ' + timeFormatter(lunchOut)).utc()}
        if(breakIn) {temp.breakIn = moment(tcDate + ' ' + timeFormatter(breakIn)).utc()}
        if(breakOut) {temp.breakOut = moment(tcDate + ' ' + timeFormatter(breakOut)).utc()}

        const shouldISubmit = () => {
            let x;
            for(x in temp){
                console.log('this is the temp obj in on submit   ', temp[x])
                if(temp[x] === false){
                    console.log('exited for in loop')
                    return false;
                }
            }
            return true;
        }

        async function temp1() {
            let goNogo = await shouldISubmit()
            if(goNogo){
                let response = await editTc(temp);
                console.log(JSON.stringify(response), "sucess")
                    window.location.href = '/timecards/'+jid;
            } else {console.log('NO GO')}
            
        }
        temp1();
    }
    

    return (
        <Fragment>
            <Navbar title="Edit Timecard" dropdown={true} home={true} />
            <main>
                <h5 className="center">Timecard #{tcid}</h5>
                <div className="container">
                    <div className="card" style={{ borderRadius: "25px" }}>
                        <div className="card-content">
                            <form onSubmit={onSubmit}>
                                <div className="form-group row">
                                <label className = 'left center-align col s4'>Clock In</label>
                                    <input className = 'center-align col s8' id="clockIn" type="text" name='clockIn' placeholder="Clock In" value={clockIn} onChange={onChange} />
                                </div>
                                <div className="form-group row">
                                <label className = 'left center-align col s4'>Clock Out</label>
                                    <input className = 'center-align col s8'  id="clockOut" type="text" name='clockOut' placeholder="Clock Out" value={clockOut} onChange={onChange} />
                                </div>
                                <div className="form-group row">
                                <label className = 'left center-align col s4'>Lunch In</label>
                                    <input className = 'center-align col s8'  id="lunchIn" type="text" name='lunchIn' placeholder="Lunch In" value={lunchIn} onChange={onChange} />
                                </div>
                                 <div className="form-group row">
                                    <label className = 'left center-align col s4'>Lunch Out</label>
                                    <input className = 'center-align col s8'  id="lunchOut" type="text" name='lunchOut' placeholder="Lunch Out" value={lunchOut} onChange={onChange} />
                                </div>
                                <div className="form-group row">
                                    <label className = 'left center-align col s4'>Break In</label>
                                    <input className = 'center-align col s8'  id="breakIn" type="text" name='breakIn' placeholder="Break In" value={breakIn} onChange={onChange} />
                                </div>
                                <div className="form-group row">
                                    <label className = 'left center-align col s4'>Break Out</label>
                                    <input className = 'center-align col s8'  id="breakOut" type="text" name='breakOut' placeholder="Break Out" value={breakOut} onChange={onChange} />
                                </div>
                                <div className="myBtn">
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