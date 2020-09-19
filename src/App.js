import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import GroupWall from './pages/GroupWall';
import Profile from './pages/Profile';
import Header from './components/Header';
import ConnectionWall from './pages/ConnectionWall';

function App() {
  return (
    <div className="App">
      <Header />

      < ConnectionWall />
    </div>
  );
}

export default App;
