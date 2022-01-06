import {React, useState} from 'react';

const NewCardForm = (props) => {
    
    const [newCard, setNewCard] = useState({message: ''});

    const updateCard = (event) => {
        setNewCard({message: event.target.value});
    };

    const submitCard = (event) => {
        if (newCard.message.length === 0 || newCard.message.length > 40) {
            alert("Message needs to be greater than 1 character or less than 40 characters")
        } else {
            event.preventDefault();
            props.createNewCard(newCard);
            setNewCard("");
        }

    };

    return (
        <div id='card-form'>
            <h3>Create Card</h3>
        <form onSubmit={submitCard}>
            <fieldset>
            <label>Card Message:</label>
                <input type="text" value={newCard.message} onChange={updateCard} />
            <input className="create-new-card" type="submit" value="Create Card" />
            </fieldset>
        </form>
        </div>
    )
}

export default NewCardForm;