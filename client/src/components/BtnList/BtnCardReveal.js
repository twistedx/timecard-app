import React, {useState} from 'react';
import './BtnCardReveal.css';




const BtnCardReveal = (props) => {
    const [cardHeight, setCardHeight] = useState();
    // const [btnState, setBtnState] = useState('clocked in');
    const [btnValues, setBtnValues] = useState(['Clock In']);

    const btnSetter = state => {
        switch (state) {
            case 'Clock In':
                // setBtnState('clocked in');
                setBtnValues(['Lunch In', 'Break In', 'Clock Out']);
                break;
            case 'Lunch In':
                // setBtnState('lunched in');
                setBtnValues(['Lunch Out']);
                break;
            case 'Lunch Out':
                // setBtnState('lunched out');
                setBtnValues(['Break In', 'Clock Out']);
                break;
            case 'Break In':
                // setBtnState('breaked in');
                setBtnValues(['Break Out']);
                break;
            case 'Break Out':
                // setBtnState('breaked out');
                setBtnValues(['Break In', 'Clock Out']);
                break;
            case 'Clock Out':
                // setBtnState('clocked out');
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
                </div>
            </div>
        </div>
    );

           
}

export default BtnCardReveal;