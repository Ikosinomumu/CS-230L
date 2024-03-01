import logo from './logo.svg';
import React from 'react';
import './App.css';
import Card from './Card';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1> 
      <h2>Section - 002</h2>
      <p>WVU ID: 800433217</p>
      <p>"Hi I am Ikechukwu Obiadimma Osinomumu!</p>      
      <Card />      
    </div>
  );
}

export default App;
