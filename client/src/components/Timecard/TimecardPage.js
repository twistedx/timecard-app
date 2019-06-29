import React from 'react';
import TcTitle from './TcTitle';
import CreateNewBtn from './CreateNewBtn';
import Navbar from '../Layout/Navbar/Navbar';
import Footer from '../Layout/Footer/Footer';
import TcList from './TcList';

const TimecardPage = () => {
  return [
    <div>
      <header>
        <Navbar title="Timecard App" />
      </header>
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
