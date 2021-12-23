import React, { useState } from 'react';
import './App.css';
// import axios from 'axios';
import Board from './components/Board';
import NewBoardForm from './components/NewBoardForm';
import BoardDisplay from './components/BoardDisplay';
require('dotenv').config();
let url = process.env.REACT_APP_BACKEND_BOARDS;
const axios = require('axios');

function App() {
  const [board, setBoard] = useState({title: '', owner: '', board_id: null});
  const [boardList, setBoardList] = useState([]);
  const [boardDisplay, setBoardDisplay] = useState(true);

  const onBoardSubmit = (newBoard) => {
    const boardDate = {
      title: newBoard.title,
      owner: newBoard.owner
    }
  }

  const addBoardList = () => {

  }

  return (
    <body className='App-body'>
      <header>
      <h1 className='Site-name'>Let's Git It Done</h1>
      </header>
      <NewBoardForm onBoardSubmit = {onBoardSubmit}/>
      <button className='Hide-board'> Hide Board</button>
      <div className='Create-card'>

      </div>
      <div className='Display-board'>
        <BoardDisplay onBoardSelect={boardDisplay}/>
      </div>
      <div className='Card-display'></div>
    </body>
  );
}

export default App;
