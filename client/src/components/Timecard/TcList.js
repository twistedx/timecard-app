import React, { useState } from 'react';

const TcList = props => {
  const [cardHeight, setCardHeight] = useState();

  return (
    <div>
      <div className="container">
        <div className="card" style={{ height: cardHeight }}>
          <div className="card-content">
            <span
              className="card-title activator grey-text text-darken-4"
              onClick={() => setCardHeight('300px')}
            >
              {' '}
              {props.title} <i className="material-icons">more_vert</i>
            </span>
          </div>
          <div className="card-reveal">
            <span
              className="card-title grey-text text-darken-4"
              onClick={() => setCardHeight()}
            >
              {' '}
              {props.title} <i className="material-icons">close</i>
            </span>
            <div>
              <span className="title">Job Description: </span>
              {props.description}
            </div>
            <div>
              <span className="title">Job Role: </span>
              {props.role}
            </div>
            <div>
              <span className="title">Job Type: </span>
              {props.type}
            </div>
            <div>
              <ul>
                <li>Clock in:</li>
                <li>Break In:</li>
                <li>Break Out:</li>
                <li>Lunch In:</li>
                <li>Lunch Out:</li>
                <li>Clock Out:</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TcList;
