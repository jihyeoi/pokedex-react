import './App.css';
import Pokedex from './Pokedex.jsx';
import {player1, player2, player1XP, player2XP} from './Pokegame.jsx'

/**
 * Displays pokemon (cards with data) on screen.
 */

function App() {

  return(
    <div>
      <b>Player 1 Total XP: {player1XP} </b>
    <Pokedex pokemon={player1}/>
    <br />
    <b>Player 2 Total XP: {player2XP} </b>
    <Pokedex pokemon={player2}/>
    </div>
  )
};

export default App;
