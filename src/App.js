import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import NewBoardForm from './components/NewBoardForm';
// import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
const axios = require('axios');


function App() {
  const [currentBoard, setBoard] = useState({title: '', owner: '', board_id: null});
  const [boardList, setBoardList] = useState([]);
  const [cardsDisplay, setCardsDisplay] = useState([]);
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
  const getCards = (id) => {
    if (id === currentBoard.board_id) {
    axios.get(`${url}/${currentBoard.board_id}/cards`)
    .then((response) => {
    console.log(response.data);
    setCardsDisplay(response.data)
    })
    .catch((error) => {
    console.log(error.data)
    });
}}

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
  
    // const cardDisplay = (card) => {
    //   if (currentBoard.board_id === card.board_id) {
    //     return (
    //       <li>
    //         <CardList/>
    //       </li>
    //     )
    //   }
    // }
  

  return (
    // <body className='App-body'>
    <div className='App-body'>
      <header>
      <h1 className='Site-name'>Let's Git It Done</h1>
      </header>
      {boardDisplay? <NewBoardForm onBoardSubmit = {onNewBoard}/>: ""}
      <button className='Hide-board' onClick={hideBoard}> Hide Board</button>
      <div className='Create-card'>Create a New Card</div>
      <button className="create-new-card">Create Card</button>
      <NewCard />
      <div className='Display-board-list' onClick={getCards}>
        <ol>{addBoardList}</ol>
      </div>
      <div className="board"> 
        
      </div>
      <div className='Card-display'>
        <ol>
        {cardsDisplay}
        </ol>
      </div>
    </body>
  );
}

export default App;
