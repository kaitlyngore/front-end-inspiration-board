import React from 'react';
// import PropTypes from 'prop-types';
// import Card from './Card';

const Board = (props) => {
    const selectBoard = () => {
        const newSelected = {
            title: props.board.title,
            owner: props.board.owner,
            id: props.board.id
        }
        props.current(newSelected);
    } 
    // console.log(getBoard)
    return (
        <li className="Board-item" onClick={selectBoard}> {props.board.title} </li>
    )

}

export default Board;