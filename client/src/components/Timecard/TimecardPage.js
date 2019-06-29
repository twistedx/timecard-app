import React from 'react';
import TcTitle from './TcTitle';
import CreateNewBtn from './CreateNewBtn';

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
        </body>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  ];
};

export default TimecardPage;
