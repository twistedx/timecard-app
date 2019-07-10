import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import EditBtn from '../BtnList/EditBtn';
const moment = require('moment');


const TcList = props => {
  const [cardHeight, setCardHeight] = useState();
  
  const moTime = t  => t === '' ? '' : moment(t).local().format('LTS');
  const title = moment(props.date).local().format('LL');


  console.log(`=====================================
  
  
  
  ${title}
  
  
  
  
  ===========================================`)




  return (
    <div className="container">
      
      <div className="card" style = {{ height: cardHeight, display: 'grid'}}>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4" onClick = { () => setCardHeight('300px') } >
            {title}<i className="material-icons right">keyboard_arrow_down</i>
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4" onClick = { () => setCardHeight() }>
            {title}<i className="material-icons right">close</i>
          </span>
          <Container>
            <Row>
              <h6>Timecard Number: {props.tcId}</h6>
            </Row>
            <Row>
              <Col>Clock In:<span className="badge">{moTime(props.clockIn)}</span></Col>
              <Col>Clock Out:<span className="badge">{moTime(props.clockOut)}</span></Col>
            </Row>
            <Row>
              <Col>Lunch In:<span className="badge">{moTime(props.lunchIn)}</span></Col>
              <Col>Lunch Out:<span className="badge">{moTime(props.lunchOut)}</span></Col>
            </Row>
            <Row>
              <Col>Break In:<span className="badge">{moTime(props.breakIn)}</span></Col>
              <Col>Break Out:<span className="badge">{moTime(props.breakOut)}</span></Col>
            </Row>
            <div><EditBtn url = "/edittc/" title = 'Edit Timecard' id = {props.tcId} jid = {props.jid} key = {props.tcId} /></div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default TcList;
