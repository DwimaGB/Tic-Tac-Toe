import { useState } from "react";
import Square from "./Square";
import GameStatus from "./GameStatus";
import './GameBoard.css';

export default function GameBoard() {

    const [playerMoves, setPlayerMoves] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const updateBoard = index=>{
        if(playerMoves[index] || checkWinner(playerMoves)){
            return;
        }
        const newPlayerMoves = [...playerMoves];

        if(xIsNext){
            newPlayerMoves[index] = 'X';
            setXIsNext(false);
        }
        else{
            newPlayerMoves[index] = 'O';
            setXIsNext(true);
        }

        setPlayerMoves(newPlayerMoves);
        
    }

    return (
        <>
            <div className="board-row">
                <Square value={playerMoves[0]} updateBoard={()=> updateBoard(0)}></Square>
                <Square value={playerMoves[1]} updateBoard={()=> updateBoard(1)}></Square>
                <Square value={playerMoves[2]} updateBoard={()=> updateBoard(2)}></Square>
            </div>
            <div className="board-row">
                <Square value={playerMoves[3]} updateBoard={()=> updateBoard(3)}></Square>
                <Square value={playerMoves[4]} updateBoard={()=> updateBoard(4)}></Square>
                <Square value={playerMoves[5]} updateBoard={()=> updateBoard(5)}></Square>
            </div>
            <div className="board-row">
                <Square value={playerMoves[6]} updateBoard={()=> updateBoard(6)}></Square>
                <Square value={playerMoves[7]} updateBoard={()=> updateBoard(7)}></Square>
                <Square value={playerMoves[8]} updateBoard={()=> updateBoard(8)}></Square>
            </div>

            <GameStatus status={updateStatus(checkWinner, xIsNext, playerMoves)}></GameStatus>
        </>
    );
}

function checkWinner(playerMoves){
    const winnerConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for(const condition of winnerConditions){
        const [i, j, k] = condition;

        if(playerMoves[i] === playerMoves[j] && playerMoves[i] === playerMoves[k]){
            return playerMoves[i];
        }
    }

    return null; 
}

function updateStatus(checkWinner, xIsNext, playerMoves){
    const winner = checkWinner(playerMoves);

    if (winner){
        return `Player ${winner} won`;
    }
    return xIsNext? 'Next Player: X': 'Next Player: O';
}
