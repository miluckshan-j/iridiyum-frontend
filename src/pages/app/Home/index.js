import React from 'react';
import LeftSidebar from '../../../components/layouts/LeftSidebar';
import MainContainer from '../../../components/layouts/MainHomeContainer';
import Right from '../../../components/layouts/RightSidebar';

function Home() {
  return (
    <div className="container-fluid d-flex h-100 flex-column">
      <div className="row">
      <LeftSidebar />
      <MainContainer />
      <Right />
      </div>
    </div>
  );
}

export default Home;
