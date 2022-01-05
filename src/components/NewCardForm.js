import {React, useState} from 'react';
// import './Card.css';
// import axios from 'axios';

const NewCardForm = (props) => {
    
    const [newCard, setNewCard] = useState({message: ''});
    // const [createCardData, setCardData] = useState([]);

    const updateCard = (event) => {
        setNewCard({message: event.target.value});
    };

    const submitCard = (event) => {
        event.preventDefault();
        props.createNewCard(newCard);
        setNewCard("");
    };

    return (
        <div id='card-form'>
            <h3>Create Card</h3>
        <form onSubmit={submitCard}>
            <fieldset>
            <label>Card Message:</label>
                {/* <input type="text" value={this.state.value} onChange={this.handleChange} className={(setNewCard.length === 0) || (setNewCard.length > 40)? 'invalid-input' : ''}/>
            <input type="submit" value="Submit" disabled={((this.state.value.length === 0) || (this.state.value.length > 40))}/> */}
                <input type="text" value={newCard.message} onChange={updateCard} minLength={1} maxLength={40}/>
            <input type="submit" value="Submit" />
            </fieldset>
        </form>
        </div>
    )
}

export default NewCardForm;