import React from "react";

import Square from "./Square";

export default function Board({ squares, onClick }) {
    /**
     * Function map num value and set onclick function
     * @param {array} numbs 
     * @returns component square for display button
     * CreateBy:  PQ Huy (21.07.2021)
     */
    const renderSquares = numbs => {
        return numbs.map(num => (
            <Square
                // set value for component square button
                value={squares[num]}

                // set on click and pass index number for component app
                onClick={() => onClick(num)}
            />
        ));
    };
    
    return (
        <div>
            <div className="board-row">{renderSquares([0, 1, 2])}</div>
            <div className="board-row">{renderSquares([3, 4, 5])}</div>
            <div className="board-row">{renderSquares([6, 7, 8])}</div>
        </div>
    );
}