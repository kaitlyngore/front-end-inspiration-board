import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import NewBoardForm from './components/NewBoardForm';
import './App.css';
import Board from './components/NewBoardForm';

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
