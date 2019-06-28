import React from 'react'
import './UserDashboardCard.css'

const UserDashboardCard = props => {
    return (
        <div>
            <div className="container">
                    <div className="card horizontal">
                        <div className="card-stacked">
                                <ul className="profileInfo">
                                    <li>Name: {props.name}</li>
                                    <li>Email: {props.email}</li>
                                    <li>Job Title: {props.jobTitle}</li>
                                </ul>
                            <div className="card-action">
                                <a className="blue-text" href="#">Edit Profile</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboardCard
