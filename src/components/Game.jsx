import { useState } from 'react';
import { Board } from './Board';
import { CalculateWinner } from '../serviecs/CalculateWinner';
const style = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '300px',
    margin: '10px auto 0 auto',
    fontSize: '20px',
};
export const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = CalculateWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };

    return <>
        <Board squares={board} onClick={handleClick} />
        <div style={style}>
            <p>
                {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
            </p>
        </div>
    </>
}
