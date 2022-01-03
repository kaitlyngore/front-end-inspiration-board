import axios from 'axios';
import {React, useState, useEffect} from 'react';
import Card from "./Card";
import NewCardForm from './NewCardForm';

const CardList = (props) => {

  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/board/${props.board.board_id}/cards}`)
    .then((response) => {
        console.log(response.data.cards)
        setCards(response.data.cards)
    })
    .catch((error) => {
      console.log(error);
      console.log(error.response);
    })
  }, [props.board.board_id])

    const allCards = props.cards.map((card) => {
      return (
        <Card
        key={card.card_id}
        cardMessage={card.cardMessage}
        cardLikes={props.cardLikes}
        deleteCard={props.deleteCard}>
        </Card>
      )
    })

return (
    <section>
        <h2>Cards for {props.board.title}</h2>
        <div>{allCards}</div>
      <NewCardForm />
    </section>
  );
};

export default CardList;