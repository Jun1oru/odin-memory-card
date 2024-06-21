import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [game, setGame] = useState({
    currentScore: 0,
    bestScore: 0,
    gameStatus: "playing",
  });

  return (
    <>
      <Header game={game} />
      <Main game={game} setGame={setGame} />
      <Footer />
    </>
  )
}

export default App
