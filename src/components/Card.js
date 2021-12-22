import useState from 'react';
// import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
    const [cardLikes, setLikes] = useState(props.numberOfLikes);

    const likeCardButton = () => {
        props.likeCard(props.id)
        // increaseCardLikes(cardLikes + 1)
        setLikes(cardLikes + 1)
        console.log(cardLikes)
    }
    const deleteCardButton = () => {
        props.deleteCard(props.id)
    }

    return (
        <section>
            <div className='card'>
                <p className='card-message'>Message: {props.cardMessage}</p>
                <p className='card-likes'>Likes: {props.cardLikes}</p>
                <button onClick={likeCardButton}>Like</button>
            </div>
            <div className='delete-card'>
                <button onClick={deleteCardButton}>Delete</button>
            </div>
        </section>
    )
}

export default Card;