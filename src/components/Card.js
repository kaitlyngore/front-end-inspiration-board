import {useState} from 'react';
// import './Card.css';
import axios from 'axios';

const Card = (props) => {
    const [cardLikes, setLikes] = useState();

    const likeCardButton = () => {
        // setLikes(cardLikes + 1)
        // console.log(cardLikes)

        axios.patch(`${process.env.REACT_APP_BACKEND_URL}/cards/${props.card.id}/like`, cardLikes)
        .then((response) => {
            console.log("Liked!");
        })
        .catch((error) => {
            console.log(error);
            console.log(error.response);
        })
    };
    
    const deleteCardButton = () => {

        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${props.card.id}`)
        .then((response) => {
            console.log("Card successfully deleted");
        })
        .catch((error) => {
            console.log(error);
            console.log(error.response);
        })
    };
    
    return (
        <section id='info'>
            <div className='row'>
                <div className='card'>
                    <p className='card-message'>Message: {props.card.message}</p>
                    <p className='card-likes'>Likes: {props.card.likes_count}</p>
                    <button onClick={likeCardButton}>Like</button>
                </div>
            </div>
            <div className='delete-card'>
                <button onClick={deleteCardButton}>Delete</button>
            </div>
        </section>
    )
}

export default Card;