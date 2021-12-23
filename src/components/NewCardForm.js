import {React, useState} from 'react';
// import PropTypes from 'prop-types';
import './Card.css';
// import CardList from './components/CardList';
// import Card from './Card';

const NewCard = (props) => {
    const [cardMessage, setMessage] = useState('');

    const updateMessage = (e) => {
        setMessage(e.target.value)
    };

    const submitNewCard = (e) => {
        e.preventDefault();
        props.postNewCard(cardMessage);
        setMessage('');
    };

    return (
        <section className='newCardForm'>
            <form className='updateCardForm' onSubmit={submitNewCard}>
            <div className='updateCardMessage'>
                <input placeholder="Update Card Message:" value={cardMessage} onChange={updateMessage} />
                {/* <p>Update Card Message</p> */}
                {/* <button onClick={updateMessage}>Update Card</button> */}
            </div>
            </form>
        </section>
    )

    // return (
    //     [
    //         'Primary',
    //         'Secondary',
    //         'Success',
    //         'Danger',
    //         'Warning',
    //         'Info',
    //         'Light',
    //         'Dark',
    //       ].map((variant, idx) => (
    //         <Card
    //           bg={variant.toLowerCase()}
    //           key={idx}
    //           text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    //           style={{ width: '18rem' }}
    //           className="mb-2"
    //         >
    //           <Card.Header>Header</Card.Header>
    //           <Card.Body>
    //             <Card.Title>{variant} Card Title </Card.Title>
    //             <Card.Text>
    //               Some quick example text to build on the card title and make up the bulk
    //               of the card's content.
    //             </Card.Text>
    //             {/* <Button variant="primary">Go somewhere</Button> */}
    //           </Card.Body>
    //           <section className='newCardForm'>
    //         <div className='updateCardMessage'>
    //             <p>Update Card Message</p>
    //             <button onClick={updateMessage}>Update Card</button>
    //         </div>
    //         <div className='submitNewCard'>
    //             <p>New Card</p>
    //             <button onClick={submitNewCard}>Submit New Card</button>
    //         </div>
    //     </section>
    //         </Card>
    //       ))
    // )

}


// NewCard.PropTypes = {

// }

export default NewCard;