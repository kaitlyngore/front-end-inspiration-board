import React, {useState, useEffect} from 'react';
import Card from './Card';
const axios = require('axios');

function CardList(props) {
    const [cardsDisplay, setCardsDisplay] = useState([]);
    
    useEffect(() => {
        getCardList();
    }, []);

    const getCardList = () => {
        axios.get(`${props.url}/${props.currentBoard}/cards`)
        .then((response) => {
            setCardsDisplay(response.data);
        })
        .catch((error) => {
            console.log(error);
            console.log(error.response);
        })
    }

    const allCards = cardsDisplay.map((card, index) => {
        if (card.board_id === props.currentBoard) {
        return (<div>
            <Card 
            key={card.id.toString()} 
            card={card} 
            checkCard={props.cards} 
            currentBoard={props.currentBoard}
            getCardList={getCardList}/>
            </div>
        )}
        else return null;
    })

    return (
        <ol className='all-cards'>
            {allCards}
        </ol>
    )
};

export default CardList;