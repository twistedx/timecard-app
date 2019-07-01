import React from 'react';
import TcTitle from './TcTitle';
import CreateNewBtn from './CreateNewBtn';
import Footer from '../Layout/Footer/Footer';
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
      <footer>
        <Footer />
      </footer>
    </div>
  ];
};

export default TimecardPage;
