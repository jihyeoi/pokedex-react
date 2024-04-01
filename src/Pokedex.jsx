
import Pokecard from './Pokecard.jsx';

/** Given an array of pokemon and their attributes,
 * creates a card for each pokemon
 */

function Pokedex({ pokemon }) {
    return (
        <div>
        {pokemon.map(p => <Pokecard id={p.id}
        name={p.name}
        type={p.type}
        base_experience={p.base_experience} />)}
        </div>
    )
}

export default Pokedex;