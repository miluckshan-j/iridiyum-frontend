import React from 'react';
import HomeLeft from '../components/HomeLeft';
import HomeMid from '../components/HomeMid';
import HomeRight from '../components/HomeRight';

function Home() {
  return (
    <div className="container-fluid d-flex h-100 flex-column">
      <div className="row">
      <HomeLeft />
      <HomeMid />
      <HomeRight />
      </div>
    </div>
  );
}

export default Home;
