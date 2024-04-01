
import Pokecard from './Pokecard.jsx';

/** Given an array of pokemon and their attributes,
 * creates a card for each pokemon
 */

function Pokedex({ pokemon }) {
    return (
        <ul>
        {pokemon.map(p =>
            <li>
               { Pokecard(p) }
            </li>
            )}
        </ul>
    )
}

export default Pokedex;