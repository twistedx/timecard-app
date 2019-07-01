import React from 'react';
import TcTitle from './TcTitle';
import CreateNewBtn from './CreateNewBtn';
import TcList from './TcList';

const TimecardPage = () => {
  return [
    <div>
      <main>
        <body>
          <TcTitle />
          <CreateNewBtn />
          <TcList />
        </body>
      </main>
    </div>
  ];
};

export default TimecardPage;
