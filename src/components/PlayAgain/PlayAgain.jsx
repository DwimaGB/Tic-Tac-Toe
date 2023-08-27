import './PlayAgain.css'

export default function PlayAgain({setIsGameOver, setPlayerMoves, setXIsNext}) {

    const handleClick = ()=>{
        setIsGameOver(false);
        setPlayerMoves(Array(9).fill(null));
        setXIsNext(true);
    }

    return (
        <div className="reset-popup">
            <button onClick={handleClick} className='btn-icon'><ion-icon class="reset-icon" name="refresh-outline"></ion-icon></button>
        </div>

    )
}