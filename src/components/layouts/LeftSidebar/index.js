import React from 'react';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import Groups from './Groups';
import '../../../styles/Left.css';

const getAuthStatus = createSelector(
  (state) => state.auth,
  (auth) => auth.user,
);


const LeftSidebar = () => {
  const user = useSelector(getAuthStatus);

  return (
    <>
      <div className="col-2 mh-100 left-col text-white p-0">
        <img src={process.env.PUBLIC_URL + 'banner.jpg'} className="img-fluid" alt="Banner" />
        <div className="mx-auto mt-n6 profile-picture">
          <img src={`${process.env.PUBLIC_URL}users/${user.id}.jpg`} className="img-fluid rounded-circle" alt="Banner" />
        </div>
        <p className="h5 font-weight-bold text-center">{user.name}</p>
        <p className="h6 text-center">{`@${user.username}`}</p>
        <p className=" font-weight-light text-center px-2">{user.bio}</p>
        <hr />
        <div className="group px-3">
          <div className="group-title">
            <p className=" h6 group-title-text font-weight-bolder text-center">My Groups</p>
          </div>
          <Groups user={user} />
        </div>
      </div>
    </>
  );
}

export default LeftSidebar;
