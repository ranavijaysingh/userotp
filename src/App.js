import './style/App.css';
import React, {useState} from "react";
import Login from './component/Login.js';
import Verify from './component/Verify';
import {Routes, Route} from 'react-router-dom';

function App() {
  const [getUserData, setGetUserData] = useState(null);
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login setGetUserData={setGetUserData}/>}/>
        <Route path="/Verify" element={<Verify userData={getUserData}/>}/>
      </Routes>

    </div>
  );
}

export default App;
