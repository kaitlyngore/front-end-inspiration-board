import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
// return a rendered Board and if necessary, Card
// need component for Create Card form?
// need to append created Card component to Board Array for display?

function App() {
  return (
    <body className='App-body'>
      <h1 className='Site-name'></h1>
      <div className='Create-board'></div>
      <button className='Hide-board'></button>
      <div className='Create-card'></div>
      <div className='Display-board'></div>
      <div className='Card-display'></div>
    </body>
  );
}

export default App;
