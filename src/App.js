import React, { useState } from 'react';
import NewBoardForm from './components/NewBoardForm';
import './App.css';
import Board from './components/NewBoardForm';
// return a rendered Board and if necessary, Card
// need component for Create Card form?
// need to append created Card component to Board Array for display?

function App() {

  return (
    <body className='App-body'>
      <header>
      <h1 className='Site-name'>Let's Git It Done</h1>
      </header>
      <Board />
      <button className='Hide-board'> Hide Board</button>
      <div className='Create-card'></div>
      <div className='Display-board'></div>
      <div className='Card-display'></div>
    </body>
  );
}

export default App;
