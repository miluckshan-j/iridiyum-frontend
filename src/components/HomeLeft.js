import React from 'react';
import MyGroupItem from './MyGroupItem';
import '../css/HomeLeft.css';

function HomeLeft() {
  return (
    <div className="col-2 mh-100 left-col text-white p-0">
      <img src="./banner.jpg" className="img-fluid" alt="Banner" />
      <div className="mx-auto mt-n6 profile-picture">
        <img src="profile-picture.jpg" className="img-fluid rounded-circle" alt="Banner" />
      </div>
      <p className="h5 font-weight-bold text-center">Miluckshan Jalangan</p>
      <p className=" font-weight-light text-center px-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <hr />
      <div className="group px-3">
        <div className="group-title">
          <p className=" h6 group-title-text font-weight-bolder text-center">My Groups</p>
        </div>
        <MyGroupItem />
        <div className="group-items">
          <p className="group-item-add font-weight-light">➕</p>
        </div>
      </div>
    </div>
  );
}

export default HomeLeft;
