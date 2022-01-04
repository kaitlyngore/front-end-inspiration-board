import {React, useState} from 'react';
// import './Card.css';
import axios from 'axios';

const NewCardForm = (props) => {
    
    const [newCard, setNewCard] = useState("");
    const [createCardData, setCardData] = useState([]);

    const updateCard = (event) => {
        setNewCard(event.target.value);
    };

    const submitCard = (event) => {
        event.preventDefault();
        props.createNewCard(event.target.value);
        setNewCard("");

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/board/${props.board.board_id}}`)
        .then((response) => {
            const createNewCard = [...createCardData.cards]
            createNewCard.push(props.data.card)
            setCardData(createNewCard)
        })
        .catch((error) => {
            console.log(error);
            console.log(error.response);
        })
    };

    return (
        <div id='card-form'>
            <h3>Create Card</h3>
        <form onSubmit={submitCard}>
            <fieldset>
            <label>Card Message:</label>
                {/* <input type="text" value={this.state.value} onChange={this.handleChange} className={(setNewCard.length === 0) || (setNewCard.length > 40)? 'invalid-input' : ''}/>
            <input type="submit" value="Submit" disabled={((this.state.value.length === 0) || (this.state.value.length > 40))}/> */}
                <input type="text" value={newCard} onChange={updateCard} minLength={1} maxLength={40}/>
            <input type="submit" value="Submit" />
            </fieldset>
        </form>
        </div>
    )
}

export default NewCardForm;