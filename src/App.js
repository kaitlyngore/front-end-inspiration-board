import React, { useState } from 'react';
<<<<<<< HEAD
import './App.css';
import axios from 'axios';
=======
import NewBoardForm from './components/NewBoardForm';
import './App.css';
import Board from './components/NewBoardForm';
>>>>>>> 82ec8f2ba1c27454ae59a5ce89c0c3b0bfe022bd
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
