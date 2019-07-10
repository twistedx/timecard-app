import React from 'react'
import { Link } from 'react-router-dom';

const EditBtn = (props) => {
    return (
        <div className="center" id="EditJobBtn">
            <Link to={"/editjob/" + props.jid} className="btn green" name="editJob" data-id={props.jid}>Edit Job</Link>
        </div>
    )
}

export default EditBtn
