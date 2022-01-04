import {useState} from 'react';
// import './Card.css';
import axios from 'axios';

const Card = (props) => {
    const [cardLikes, setLikes] = useState();

    // const likeCardButton = () => {
    //     // props.likeCard(props.id)
    //     // increaseCardLikes(cardLikes + 1)
    //     setLikes(props.card.likes_count + 1)
    // }

    // const [cardLikes, setLikes] = useState(props.numberOfLikes);

    const likeCardButton = () => {
        setLikes(cardLikes + 1)
        console.log(cardLikes)

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/board/${props.id}}`, cardLikes)
        .then((response) => {
            console.log("Liked!");
        })
        .catch((error) => {
            console.log(error);
            console.log(error.response);
        })
    }
    
    const deleteCardButton = () => {
        // props.deleteCard(props.card.id)
    
        props.deleteCard(props.id)
        
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/board/${props.id}`)
        .then((response) => {
            console.log("Card successfully deleted");
        })
        .catch((error) => {
            console.log(error);
            console.log(error.response);
        })
    };

    // possible test code
    
        const selectedCard = {
            board_id: props.currentBoard,
            message: props.card.message,
            likes_count: props.card.likes_count
        }
        // props.checkCard(selectedCard);
    

    return (
        // <section>
        //     <div className='card' > 
        //         <p className='card-message'>Message: {props.card.message}</p>
        //         <p className='card-likes'>Likes: {props.card.likes_count}</p>
        //         <button onClick={likeCardButton}>Like</button>
        //         </div>
        <section id='info'>
            <div className='row'>
                <div className='card'>
                    <p className='card-message'>Message: {props.cardMessage}</p>
                    <p className='card-likes'>Likes: {props.cardLikes}</p>
                    <button onClick={likeCardButton}>Like</button>
                </div>
            </div>
            <div className='delete-card'>
                <button onClick={deleteCardButton}>Delete</button>
            </div>
        </section>
        // </section>
    )
}

export default Card;