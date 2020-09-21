import React from 'react';
import '../../../styles/ProfileLeft.css';

function ProfileLeft() {
  return (
    <div className="col-2 mh-100 left-col text-white p-0 profile-col-left">
      <div className="profile-picture-actions list-inline border border-grey float-right bg-white">
        <p className="list-inline-item px-1 mb-0">🖊️</p>
        <p className="list-inline-item px-1 mb-0">❌</p>
      </div>
      <img src="profile-picture.jpg" className="img-fluid profile-picture" alt="Banner" />
      <p className="h6 font-weight-bold mt-3 text-center">Bio 🖊️</p>
      <textarea type="textarea" name="bio" id="bio" className="bio" maxLength="250" rows="6" value="LOLOL" />
    <hr />
    <div className="group px-3">
      <div className="group-title">
        <p className=" h6 group-title-text font-weight-bold text-center">My Groups</p>
      </div>
      <div className="group-items">
        <p className="group-item-text font-weight-light">All</p>
      </div>
      <div className="group-items">
        <div className="list-inline">
          <p className="list-inline-item group-item-text font-weight-light">Family</p>
          <p className="list-inline-item pl-1 mb-0 float-right">❌</p>
          <p className="list-inline-item px-1 mb-0 float-right">🖊️</p>
        </div>
      </div>
      <div className="group-items">
        <div className="list-inline">
          <p className="list-inline-item group-item-text font-weight-light">Friends</p>
          <p className="list-inline-item pl-1 mb-0 float-right">❌</p>
          <p className="list-inline-item px-1 mb-0 float-right">🖊️</p>
        </div>
      </div>
      <div className="group-items">
        <div className="list-inline">
          <p className="list-inline-item group-item-text font-weight-light">Colleagues</p>
          <p className="list-inline-item pl-1 mb-0 float-right">❌</p>
          <p className="list-inline-item px-1 mb-0 float-right">🖊️</p>
        </div>
      </div>
      <div className="group-items">
        <div className="list-inline">
          <p className="list-inline-item group-item-text font-weight-light">Meme Sharers</p>
          <p className="list-inline-item pl-1 mb-0 float-right">❌</p>
          <p className="list-inline-item px-1 mb-0 float-right">🖊️</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProfileLeft;
