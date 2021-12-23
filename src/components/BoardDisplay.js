import React from 'react';


const BoardDisplay = (props) => {
    return (
        <ul className="Board-display">
            {props.onBoardSelect}
        </ul>
    )

}

export default BoardDisplay;