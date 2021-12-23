import {React, useState} from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const NewCard = (props) => {
    const [cardMessage, setMessage] = useState('');

    const updateMessage = (e) => {
        setMessage(e.target.value)
    };

    const submitNewCard = (e) => {
        e.preventDefault();
        props.postNewCard(cardMessage);
    };

    // return (
    //     <section className='newCardForm'>

    //     </section>
    // )

    return (
        [
            'Primary',
            'Secondary',
            'Success',
            'Danger',
            'Warning',
            'Info',
            'Light',
            'Dark',
          ].map((variant, idx) => (
            <Card
              bg={variant.toLowerCase()}
              key={idx}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))
    )

}


// NewCard.PropTypes = {

// }

export default NewCard;