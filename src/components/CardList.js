// import axios from 'axios';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
// import {React, useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import NewCard from './NewCardForm';
import Card from './Card';

function CardList(props) {
    const [cardsDisplay, setCardsDisplay] = useState([]);
    useEffect(() => {
        axios.get(`${props.url}/${props.currentBoard.board_id}/cards`)
        .then((response) => {
            setCardsDisplay(response.data)
        });
    }, )
    const allCards = cardsDisplay.map((card) => {
        if (card.board_id === props.currentBoard) {
        return (<p>
            <Card card ={card} checkCard={props.cards} currentBoard={props.currentBoard}>
                {/* cardId={card.id} */}
                {/* cardMessage={card.message}
                cardLikes={card.likes_count} */}
            </Card></p>
        )}
        else return "";
    })
    // console.log(cardsDisplay)
    // const cards = props.cards;
    // const allCards = cards.map((card) =>
    // <p>{card}</p>
    // );
    return (
        <div className='all-cards'>
            All Cards: {allCards}
        </div>
    )
}

// function CardList(props) {
//     const [card, currentCard] = useState([]);

//     useEffect(() => {
//         axios.get(`${process.env.REACT_APP_BACKEND_URL)/board/${props.board.board_id}/cards}`)
//         .then(response) => {
//             console.log(response.data)
//             currentCard(response.data)
//         })
//     }, [props.board.board_id])
    
// }

export default CardList;