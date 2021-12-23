// import {React, useState} from 'react';
import React from 'react';
// import PropTypes from 'prop-types';
import './Card.css';
// import CardList from './components/CardList';
// import Card from './Card';

class NewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.updateMessage = this.handleChange.bind(this);
        this.submitMessage = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A card was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Card:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

// const NewCard = (props) => {
//     const [cardMessage, setMessage] = useState('');

//     const updateMessage = (e) => {
//         setMessage(e.target.value)
//     };

//     const submitNewCard = (e) => {
//         e.preventDefault();
//         props.postNewCard(cardMessage);
//         setMessage('');
//         console.log("Your card has been submitted!")
//     };

// //     Create
// // Create a new card for the selected board, by filling out a form and filling out a "message."
// // See an error message if I try to make the card's "message" more than 40 characters.
// // All error messages can look like a new section on the screen, a red outline around the input field, and/or disabling the input, as long as it's visible
// // See an error message if I try to make a new card with an empty/blank/invalid/missing "message."

//     return (
//         <section className='newCardForm'>
//             <form className='updateCardForm' onSubmit={submitNewCard}>
//             <div className='updateCardMessage'>
//                 <input type="text" placeholder="Update Card Message:" value={cardMessage} />
//                 {/* <input type="text" placeholder="Update Card Message:" value={cardMessage} onChange={updateMessage} /> */}
//                 {/* <p>Update Card Message</p> */}
//                 <button onClick={updateMessage}>Update Card</button>
//             </div>
//             </form>
//         </section>
//     )

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




// NewCard.PropTypes = {

// }

export default NewCard;