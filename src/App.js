import NewCard from './components/NewCardForm';
import CardList from './components/CardList';
import Card from './components/Card';
import React, { useState, useEffect } from 'react';
import './App.css';
// import axios from 'axios';
import Board from './components/Board';
import NewBoardForm from './components/NewBoardForm';
// require('dotenv').config();
let url = process.env.REACT_APP_BACKEND_BOARDS;
const axios = require('axios');

function App() {
  const [board, setBoard] = useState({title: '', owner: '', board_id: null});
  const [boardList, setBoardList] = useState([]);
  const [boardDisplay, setBoardDisplay] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
// make new board
  const onNewBoard = (boardInfo) => {
    const newBoard = {
      title: boardInfo.title,
      owner: boardInfo.owner
    }
    axios.post(url, newBoard)
    .then(function(response) {
      setBoard(response.data)
      console.log(response);
    })
    .catch(function(error) {
      console.log(setErrorMessage(error.data));
    });
  }
// hide board
  const hideBoard = () => {
    setBoardDisplay(!boardDisplay);
  }
// get boards
  const getBoards = () => {
    axios.get(url)
    .then((response) => {
      setBoardList(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.data)
      console.log(errorMessage);
    });
  }
// get one board
  const getOneBoard = (board) => {
    axios.get(`${url}/${board.board_id}`)
    .then((response) => {
      setBoard(response.data)
    })
    .catch((error) => {
      setErrorMessage(error.data)
      console.log(errorMessage);
    });
  }
// load board list
  useEffect(() => {
    getBoards();
  }, [boardList])

// going through the boards to add them to the list
  const addBoardList = () => {
    boardList.map((oneBoard) => {
      return (<Board key={oneBoard.board_id} board={oneBoard} setBoard={getOneBoard}></Board>)
    })
  }

  return (
    <body className='App-body'>
      <header>
      <h1 className='Site-name'>Let's Git It Done</h1>
      </header>
      <NewBoardForm onBoardSubmit = {onNewBoard}/>
      <button className='Hide-board' onClick={hideBoard}> Hide Board</button>
      <div className='Create-card'>Create a New Card</div>
      <button className="create-new-card">Create Card</button>
      <NewCard />
      <div className='Display-board'>
        <ol>{addBoardList}</ol>
        
      </div>
      <div className='Card-display'></div>
      {/* <CardList /> */}
      {/* <Card /> */}
    </body>
  );
}

export default App;
