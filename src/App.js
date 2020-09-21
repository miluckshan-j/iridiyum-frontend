import React from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import './App.css';
import Home from './pages/app/Home';
// import GroupWall from './pages/GroupWall';
import Profile from './pages/app/Profile';
import Connections from './pages/app/Connections';
import Groups from './pages/app/Groups';
import PublicRoute from "./components/utils/PublicRoute";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/utils/PrivateRoute";
import { Provider } from "react-redux";

import store from './redux/store';
import { SET_CURRENT_USER } from "./redux/actionTypes";

const item = localStorage.getItem('auth_user');

if (item) {
  store.dispatch({ type: SET_CURRENT_USER, payload: JSON.parse(item) });
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/connections" component={Connections} />
          <PrivateRoute exact path="/group/:id" component={Groups} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
