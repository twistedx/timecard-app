import React from 'react'
import './UserDashboardCard.css'

const UserDashboardCard = props => {
    return (
        <div>
            <div className="container">
                <div className="card" id="userCard">
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <h4>Profile Info</h4>
                            <ul className="profileInfo">
                                <li>Name: {props.name}</li>
                                <li>Email: {props.email}</li>
                                <li>Title: {props.jobTitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboardCard
