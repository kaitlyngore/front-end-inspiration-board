import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Board = (props) => {
    const boardSelect = () => {
        return (props.setBoard(props.board));
    }
    return (
        <li className="Board-item" onClick={boardSelect}>{props.board.title}</li>
    )
}

export default Board;