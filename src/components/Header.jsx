import '../styles/Header.css';

export default function Header({ game }) {
    return (
        <>
            <header>
                <h1>Memory Game</h1>
                <p>Current score: {game.currentScore}</p>
                <p>Best score: {game.bestScore}</p>
            </header>
        </>
    );
}