import {useState} from 'react';
import './Card.css';

const Card = (props) => {
    const [cardLikes, setLikes] = useState(0);

    const likeCardButton = (card) => {
        // props.likeCard(props.id)
        // increaseCardLikes(cardLikes + 1)
        setLikes(props.card.likes_count + 1)
        console.log(cardLikes)
    }
    const deleteCardButton = () => {
        props.deleteCard(props.card.id)
    }

    // possible test code
    
        const selectedCard = {
            board_id: props.currentBoard,
            message: props.card.message,
            likes_count: props.card.likes_count
        }
        // props.checkCard(selectedCard)
    

    return (
        <section>
            <div className='card' > {props.checkCard(selectedCard)}
                {/* <p className='card-message'>Message: {props.cardMessage}</p>
                <p className='card-likes'>Likes: {props.cardLikes}</p> */}
                <button onClick={likeCardButton}>Like</button>
            </div>
            <div className='delete-card'>
                <button onClick={deleteCardButton}>Delete</button>
            </div>
        </section>
    )
}

export default Card;