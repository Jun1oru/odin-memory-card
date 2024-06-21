import shuffle from '../js/shuffle.js';
import '../styles/GameStatus.css';

export default function GameStatus({ game, setGame, cardsList, setCardsList }) {
    function handleClick() {
        const newGame = {
            ...game,
            currentScore: 0,
            bestScore: 0,
            gameStatus: "playing",
        };
        setGame(newGame);
        cardsList.map(card => card.clicked = false);
        const newGameCardsList = [...cardsList];
        setCardsList(shuffle(newGameCardsList));
    }

    return (
        <div className="game-status"
        >
            {game.gameStatus === "won" && <h2>Game Won!</h2>}
            {game.gameStatus === "lost" && <h2>Game Lost!</h2>}
            <button onClick={handleClick}>Play again</button>
        </div>
    )
}