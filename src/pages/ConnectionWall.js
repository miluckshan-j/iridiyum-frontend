import React from 'react';
import ConnectionLeft from '../components/ConnectionLeft';
import Mid from '../components/Mid';
import Right from '../components/Right';

function ConnectionWall() {
  return (
    <div class="container-fluid d-flex h-100 flex-column">
      <div class="row">
      <ConnectionLeft />
      <Mid />
      <Right />
      </div>
    </div>
  );
}

export default ConnectionWall;
