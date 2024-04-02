// import Pokedex from './Pokedex.jsx'


import { shuffle } from 'lodash';


let pokemon = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

function findXP(pokemonXp) {
  const playerArr = pokemonXp.map(p =>  p.base_experience);
  const totalXp = playerArr.reduce((acc, sum) => acc + sum);
  return totalXp
}

const pokeShuffle = shuffle(pokemon);

//two arrays of objects -> player 1 and player 2 pokemon (4 each).
const player1 = pokeShuffle.slice(0, 4);
const player2 = pokeShuffle.slice(4);


const player1XP = findXP(player1)
const player2XP = findXP(player2)

const winner = player1XP > player2XP ? `player1 wins! Winning Score: ${player1XP}` : `player2 wins! Winning Score: ${player2XP}`

export { player1, player2, player1XP, player2XP, winner }







