import React from 'react';
import ProfileLeft from '../components/ProfileLeft';
import ProfileRight from '../components/ProfileRight';
import ProfileBanner from '../components/ProfileBanner';
import '../css/Profile.css';

function Home() {
  return (
    <div>
    <ProfileBanner />
    <div class="container-fluid d-flex h-100 flex-column">
      <div class="row">
      <ProfileLeft />
      <ProfileRight />
      </div>
    </div>
    </div>

  );
}

export default Home;
