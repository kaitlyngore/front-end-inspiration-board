import NewCard from './components/NewCardForm';
import Card from './components/Card';
import CardList from './components/CardList';
import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import NewBoardForm from './components/NewBoardForm';
const axios = require('axios');

function App() {
  const [currentBoard, setBoard] = useState({title: '', owner: '', board_id: null});
  const [boardList, setBoardList] = useState([]);
  // const [cardsDisplay, setCardsDisplay] = useState([]);
  const [cards, setCards] = useState({message: '', card_likes: null})
  const [boardDisplay, setBoardDisplay] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  let url = process.env.REACT_APP_BACKEND_BOARDS;
// make new board
  const onNewBoard = (boardInfo) => {
    const newBoard = {
      title: boardInfo.title,
      owner: boardInfo.owner,
      board_id: null
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

  const checkBoard = (board) => {
    setBoard(board)
    console.log(currentBoard);
  }

  const checkCards = (card) => {
    setCards(card)
    console.log(cards);
  }

//   const getCards = (id) => {
//     if (id === currentBoard.board_id) {
//     axios.get(`${url}/${currentBoard.board_id}/cards`)
//     .then((response) => {
//     console.log(response.data);
//     setCardsDisplay(response.data)
//     })
//     .catch((error) => {
//     console.log(error.data)
//     });
// }}
  // const getBoards = (id) => {
  //   if (id === currentBoard.board_id) {
  //     axios.get(`${url}/${currentBoard.board_id}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setBoard(response.data)
  //     });
  //   }
  // }
  // useEffect(() => {
    
  //     axios.get(`${url}/${currentBoard.board_id}/cards`)
  //     .then((response) => {
  //       console.log(response.data)
  //       setCardsDisplay(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error.data)
  //     });
    
  // }, )
// load board list
  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setBoardList(response.data);
    });
  }, )

// going through the boards to add them to the list
  const addBoardList = boardList.map((oneBoard, index) => {
      return (<li> 
        <Board key={index+1} id={index+1} board ={oneBoard} current={checkBoard}/>
      </li>)
    })

  return (
    <body className='App-body'>
      <header>
      <h1 className='Site-name'>Let's Git It Done</h1>
      </header>
      {boardDisplay? <NewBoardForm onBoardSubmit = {onNewBoard}/>: ""}
      <button className='Hide-board' onClick={hideBoard}> Hide Board</button>
      <div className='Create-card'>Create a New Card</div>
      <button className="create-new-card">Create Card</button>
      <NewCard />
      <div className='Display-board-list' >
        <ol>{addBoardList}</ol>
      </div>
      <div className="board"> 
      {currentBoard.board_id? currentBoard.title: ""}
      </div>
      <section className='Card-display'>
        {currentBoard.board_id? <CardList url={url} currentBoard={currentBoard.board_id} cards={checkCards}/>: ""}
      </section>
    </body>
  );
}

export default App;
