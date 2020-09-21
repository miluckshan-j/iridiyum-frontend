import React from 'react';
import { createSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import Logout from './logout.svg'
import { CLEAR_CURRENT_USER } from '../../redux/actionTypes';

const getAuthStatus = createSelector(
  (state) => state.auth,
  (auth) => auth.user,
);

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(getAuthStatus);

  const _logout = () => {
    dispatch({ type: CLEAR_CURRENT_USER });
  }

  return (
    <nav className="navbar-dark p-1" style={{ backgroundColor: "#4a148c" }}>
      <div className="container-fluid align-middle">
        <div className="row">
          <div className="col-2 border-right">
            <img src="./uob_logo.jpg" className="w-25" alt="" />
          </div>
          <div className="col-8 border-right">
            <form className="form-inline">
              <a className="h4 text-white text-decoration-none" href="/">Iridiyum</a>
              <input className="form-control w-50 ml-5" type="text" placeholder="Search" aria-label="Search" />
            </form>
          </div>
          <div className="col-2">
            <div className="list-inline">
              <p className="list-inline-item text-white mb-0">{user.name}</p>
              <img onClick={_logout} src={Logout} width="15px" alt="logout" style={{ position: 'relative', top: '8px' }} className="float-right" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );

}

export default Header;
