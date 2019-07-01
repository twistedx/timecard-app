import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

const TcList = props => {
  const [cardHeight, setCardHeight] = useState();


  return (
    <div>
      <div className="card" style = {{ height: cardHeight }}>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4" onClick = { () => setCardHeight('300px') } >
            Timecard<i class="material-icons right">more_vert</i>
          </span>
          <p>
            {/* optional */}
            <a href="#">Edit Timecard</a>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4" onClick = { () => setCardHeight() }>
            Timecard<i class="material-icons right">close</i>
          </span>
          <p>
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
          </p>
          <Container>
            <Row>
              <Col><span class="badge">1212</span>Clock In:</Col>
              <Col><span class="badge">1133</span>Break Out:</Col>
              <Col><span class="badge">1132</span>Break In:</Col>
            </Row>
            <Row>
              <Col><span class="badge">1232</span>Lunch Out:</Col>
              <Col><span class="badge">2321</span>Lunch In:</Col>
              <Col><span class="badge">2321</span>Clock Out:</Col>
            </Row>
            {/* <div className="collection-item">
              
            </div>
            <div className="collection-item">
              
            </div>
            <div className="collection-item">
              
            </div>
            <div className="collection-item">
              
            </div>
            <div className="collection-item">
              
            </div>
            <div className="collection-item">
              
            </div> */}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default TcList;
