import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
