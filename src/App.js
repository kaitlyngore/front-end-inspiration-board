import NewCard from './components/NewCardForm';
import CardList from './components/CardList';
import Card from './components/Card';
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
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

  return (
    <body className='App-body'>
      <header>
      <h1 className='Site-name'>Let's Git It Done</h1>
      </header>
      <NewBoardForm onBoardSubmit = {onBoardSubmit}/>
      <button className='Hide-board'> Hide Board</button>
      <div className='Create-card'>Create a New Card</div>
      <button className="create-new-card">Create Card</button>
      <NewCard />
      <div className='Display-board'>
        <BoardDisplay onBoardSelect={boardDisplay}/>
      </div>
      <div className='Card-display'></div>
      <CardList />
      <Card />
    </body>
  );
}

export default App;
