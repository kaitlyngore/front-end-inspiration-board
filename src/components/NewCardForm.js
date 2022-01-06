import {React, useState} from 'react';
import './Card.css'

const NewCardForm = (props) => {
    
    const [newCard, setNewCard] = useState({message: ''});

    const updateCard = (event) => {
        setNewCard({message: event.target.value});
    };

    const submitCard = (event) => {
        // if (newCard.message === '' && newCard.message > 40) {
        //     alert("Message needs to be greater than 1 character or less than 40 characters")
        // }
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
                <input type="text" value={newCard.message} onChange={updateCard}  />
                {/* minLength={1} maxLength={40} */}
            <input className="create-new-card" type="submit" value="Create Card" disabled={((newCard.message.length === 0) || (newCard.message.length > 40))}/>
            <span>
                {newCard.message.length === 0 &&
                    <p className="warning">Card message cannot be empty.</p>
                }
                {newCard.message.length > 40 &&
                    <p className="warning">Card message needs to be less than 40 characters.</p>
                }
            </span>
            </fieldset>
        </form>
        </div>
    )
}

export default NewCardForm;