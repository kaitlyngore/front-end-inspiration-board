import React from 'react';
import './App.css';
import Board from './components/NewBoardForm';
import NewCard from './components/NewCardForm';
import CardList from './components/CardList';
import Card from './components/Card';
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
      <div className='Create-card'>Create a New Card</div>
      <button className="create-new-card">Create Card</button>
      <NewCard />
      <div className='Display-board'></div>
      <CardList />
      <div className='Card-display'></div>
      <Card />
    </body>
  );
}

export default App;
