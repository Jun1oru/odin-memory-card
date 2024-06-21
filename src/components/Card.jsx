import shuffle from '../js/shuffle.js';
import '../styles/Card.css';

export default function Card({ card, cardsList, setCardsList, game, setGame }) {
    function updateScore() {
        if (game.currentScore === cardsList.length - 1) {
            const newGame = {
                ...game,
                currentScore: cardsList.length,
                bestScore: cardsList.length,
                gameStatus: "won",
            }
            setGame(newGame)
        } else {
            const newGameScore = {
                ...game,
                currentScore: game.currentScore + 1,
            };
            setGame(newGameScore);
        }
    }
    
    function handleClick() {
        if (card.clicked) {
            const newGame = {
                ...game,
                currentScore: 0,
                bestScore: game.bestScore > game.currentScore ? game.bestScore : game.currentScore,
                gameStatus: "lost",
            }
            setGame(newGame);
            cardsList.map(card => card.clicked = false);
            const newGameCardsList = [...cardsList];
            setCardsList(shuffle(newGameCardsList));
        }
        else {
            card.clicked = !card.clicked;
            const newCardsList = [...cardsList];
            setCardsList(shuffle(newCardsList));
            updateScore();
        }
    }

    return (
        <div
            className="card"
            onClick={handleClick}
        >
            <img
                className="cardImg"
                alt={card.name}
                src={card.url}
            />
            <p>{card.name}</p>
        </div>
    );
}