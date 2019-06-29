import React from 'react';
import './CreateNewBtn.css';

const CreateNewBtn = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m12 l12 center">
          <a className="btn-floating btn-large waves-effect waves-light blue">
            +
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateNewBtn;
