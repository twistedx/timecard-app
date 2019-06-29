import React from 'react';
import './TcTitle.css';

function TcTitle(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default TcTitle;
