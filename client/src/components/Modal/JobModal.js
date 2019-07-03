import React, { useState, useEffect, Fragment } from 'react';
import './JobModal.css';

const JobModal = () => {
    const [ addJob, setAddJob ] = useState(true);
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

            <div id = 'modal'>
                <button className = 'center valign-wrapper' onClick = { () => ajCheck() }>x</button> 
            </div>
        </Fragment>
    );
}
export default JobModal;