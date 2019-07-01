import React, {useState, useEffect} from 'react';
import './BtnCardReveal.css';




const BtnCardReveal = (props) => {
    const initialState = []

    const [cardHeight, setCardHeight] = useState();
    const [btnValues, setBtnValues] = useState(['Clock In']);

    const btnSetter = state => {
        switch (state) {
            case 'Clock In':
                window.localStorage.setItem('btnState', state);
                setBtnValues(['Lunch In', 'Break In', 'Clock Out']);
                break;
            case 'Lunch In':
                window.localStorage.setItem('btnState', state);
                setBtnValues(['Lunch Out']);
                break;
            case 'Lunch Out':
                window.localStorage.setItem('btnState', state);
                setBtnValues(['Break In', 'Clock Out']);
                break;
            case 'Break In':
                window.localStorage.setItem('btnState', state);
                setBtnValues(['Break Out']);
                break;
            case 'Break Out':
                window.localStorage.setItem('btnState', state);
                setBtnValues(['Break In', 'Clock Out']);
                break;
            case 'Clock Out':
                window.localStorage.setItem('btnState', state);
                setBtnValues(['Clock In']);
                break;
        }
    }

    const btnArr = btnValues.map( v =>  
        <li key = {v}> <input type = 'button' value = {v} onClick = { () =>   btnSetter(v) }/>  </li>
    );
    return (
        <div className = 'container'>
            <div className="card" style = {{ height: cardHeight }}>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4" onClick = { () => setCardHeight('300px') } > { props.title } <i className="material-icons right" >more_vert</i></span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4" onClick = { () => setCardHeight() } > { props.title } <i className="material-icons right">close</i></span>
                    <div>
                        <span className = 'title'>Job Description: </span>
                        { props.description }
                    </div>
                    <div>
                        <span className = 'title'>Job Role: </span>
                        { props.role }
                    </div>
                    <div>
                        <span className = 'title'>Job Type: </span>
                        { props.type }
                    </div>
                    <ul>
                        <li> <input type = 'button' value = 'All Timecards' /> </li>
                        {btnArr}
                    </ul>
                    <div>
                        you've clocked in at blah o clock
                    </div>
                </div>
            </div>
        </div>
    );

           
}

export default BtnCardReveal;