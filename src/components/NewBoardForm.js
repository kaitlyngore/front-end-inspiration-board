import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const handleSubmit = (event) => {
    event.preventDefault();
    alert('Board Created')
  }
const Board = () => {
    const [title, setTitle] = useState(null);
    const [owner, setOwner] = useState(null);
    return (
      <div className="Board">
        <h3>Create Board</h3>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
            <p>Title: </p>
            <input type="text" name="title" />
            </label>
            <label>
            <p> Owner: </p>
            <input type="text" name="owner" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
        </form>
          </div>
    );
  }


export default Board;