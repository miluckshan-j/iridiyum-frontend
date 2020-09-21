import React from 'react';
import ProfileLeft from './ProfileLeft';
import ProfileRight from './ProfileRight';
import ProfileBanner from './ProfileBanner';
import '../../../styles/Profile.css';

function Home() {
  return (
    <div>
    <ProfileBanner />
    <div className="container-fluid d-flex h-100 flex-column">
      <div className="row">
      <ProfileLeft />
      <ProfileRight />
      </div>
    </div>
    </div>

  );
}

export default Home;
