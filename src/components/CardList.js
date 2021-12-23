// import axios from 'axios';
import React from 'react';
// import {React, useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import NewCard from './NewCardForm';
// import Card from './Card';

function CardList(props) {
    const cards = props.cards;
    const allCards = cards.map((card) =>
    <p>{card}</p>
    );
    return (
        <div className='all-cards'>
            <p>All Cards: {allCards}</p>
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