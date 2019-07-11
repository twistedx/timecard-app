import React from 'react'
import { Link } from 'react-router-dom';

const EditBtn = (props) => {
    return (
        <div className="center" id="EditJobBtn">
            <Link to={ props.url + props.id +'/'+ props.jid} className="btn" id="editJobCardReveal" name="editJob" data-jid = {props.jid} data-id={props.id}>{props.title}</Link>
        </div>
    )
}

export default EditBtn
