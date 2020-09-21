import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Text from '../../components/LabeledFields/fields/Text';
import { SET_CURRENT_USER } from '../../redux/actionTypes';
import axios from '../../utils/axios';

import './Login.css';

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const _onSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { username, password }
      const res = await axios.post('/login', data);
      dispatch({ type: SET_CURRENT_USER, payload: res.data[0] });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div class="container-fluid d-flex h-100 flex-column">
      <div class="row">
        <div class="col mh-100 p-0">
          <form onSubmit={_onSubmit} class="form-signin">
            <p class="h1 mb-2 text-decoration-none" href="#">Iridiyum</p>
            <p class="h5 mb-3 font-weight-normal">Please sign in</p>
            <Text id="username" value={username} onChange={setUsername} placeholder="Username" />
            <Text id="password" value={password} onChange={setPassword} placeholder="Password" type="password" />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login
