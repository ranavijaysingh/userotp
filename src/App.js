import './style/App.css';
import React, {useState} from "react";
import Login from './component/Login.js';
import Verify from './component/Verify';
import {Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Verify" element={<Verify />}/>
      </Routes>

    </div>
  );
}

export default App;
