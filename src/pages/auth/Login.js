import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Text from '../../components/LabeledFields/fields/Text';
import { SET_CURRENT_USER } from '../../redux/actionTypes';
import axios from '../../utils/axios';

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const _onSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { username, password }
      const res = await axios.post('/login', data);
      console.log({ userDAta: res.data[0] })
      dispatch({ type: SET_CURRENT_USER, payload: res.data[0] });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={_onSubmit}>
      <Text id="username" value={username} onChange={setUsername} placeholder="Username" />
      <Text id="password" value={password} onChange={setPassword} placeholder="Password" type="password" />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Login
