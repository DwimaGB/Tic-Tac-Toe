import { useState } from "react";
import Square from "./Square";
import GameStatus from "./GameStatus";
import './GameBoard.css';

export default function GameBoard() {

    const [playerMoves, setPlayerMoves] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const updateBoard = index=>{
        if(playerMoves[index]){
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

            <GameStatus nextMove={xIsNext? 'X': 'O'}></GameStatus>
        </>
    );
}