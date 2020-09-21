import React from 'react';
import LeftSidebar from '../../components/layouts/LeftSidebar';
import MainContainer from '../../components/layouts/MainGroupContainer';
import RightContainer from '../../components/layouts/RightSidebar';

function Groups() {
  return (
    <div className="container-fluid d-flex h-100 flex-column">
      <div className="row">
      <LeftSidebar />
      <MainContainer />
      <RightContainer />
      </div>
    </div>
  );
}

export default Groups;
