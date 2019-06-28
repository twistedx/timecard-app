import React, {useState} from 'react';
import './BtnCardReveal.css';




const BtnCardReveal = (props) => {
    const [cardHeight, setCardHeight] = useState();
    const [btnState, setBtnState] = useState('new tc');
    const [btnValues, setBtnValues] = useState(['Clock In']);

    const btnSetter = state => {
        switch (state) {
            case 'clocked in':
                setBtnValues(['Lunch In', 'Break In', 'Clock Out']);
                break;
            case 'lunched in':
                setBtnValues(['Lunch Out']);
                break;
            case 'lunched out':
                setBtnValues(['Break In', 'Clock Out']);
                break;
            case 'breaked in':
                setBtnValues(['Break Out']);
                break;
            case 'breaked out':
                setBtnValues(['Break In', 'Clock Out']);
                break;
            case 'clocked out':
                setBtnValues(['Clock In']);
                break;
        }
    }

    const btnArr = btnValues.map( v =>  
        <li> <input type = 'button' value = {v} onClick = { btnSetter(btnValues) }/>  </li>
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
                        {/* <input type = 'button' value = 'Clock In' onClick = { } />
                        <input type = 'button' value = 'Lunch In' onClick = { } />
                        <input type = 'button' value = 'Break In' onClick = { } />
                        <input type = 'button' value = 'Clock Out' onClick = { } />
                        <input type = 'button' value = 'Lunch Out' onClick = { } />
                        <input type = 'button' value = 'Break Out' onClick = { } /> */}
                    </ul>
                </div>
            </div>
        </div>
    );

           
}

export default BtnCardReveal;