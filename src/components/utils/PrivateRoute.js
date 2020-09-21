import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';


import Header from '../layouts/Header';

const getAuthStatus = createSelector(
  (state) => state.auth,
  (auth) => auth.isAuthenticated,
);

const PrivateRoute = (props) => {
  const { component: Component, path } = props;
  const isAuthenticated = useSelector(getAuthStatus);
  // const isAuthenticated = true;

  return (
    <Route
      // exact
      path={path}
      render={() => (
        isAuthenticated
          ? (
            <>
              <Header />
              <Component />
            </>
          )
          : (
            <Redirect
              to="/login"
            />
          ))}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;