import React from 'react';
import Left from '../components/Left';
import Mid from '../components/Mid';
import Right from '../components/Right';

function Home() {
  return (
    <div className="container-fluid d-flex h-100 flex-column">
      <div className="row">
      <Left />
      <Mid />
      <Right />
      </div>
    </div>
  );
}

export default Home;
