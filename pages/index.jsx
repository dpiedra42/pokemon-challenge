import Pokedex from '../components/Pokedex';
import { useState, useEffect } from "react";

function Pokegame() {
  const pokemons = [
    {id: 4, name: 'Charmander', type: 'Fire', exp: 62},
    {id: 7, name: 'Squirtle', type: 'Water', exp: 63},
    {id: 11, name: 'Metapod', type: 'Bug', exp: 72},
    {id: 12, name: 'Butterfree', type: 'Flying', exp: 178},
    {id: 25, name: 'Pikachu', type: 'Electric', exp: 112},
    {id: 39, name: 'Jigglypuff', type: 'Normal', exp: 95},
    {id: 94, name: 'Gengar', type: 'Poison', exp: 225},
    {id: 133, name: 'Eevee', type: 'Normal', exp: 65}
  ]

  const [hand1, setHand1] = useState([]);
  const [hand2, setHand2] = useState([...pokemons]);
  
  while (hand1.length < hand2.length)
  {
    let randIdx = Math.floor(Math.random() * hand2.length);
    // [0] pushes the first element instead of array, because spllice returns an array
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon); 
  }

  // callback function to add exp of each pokemon in the hand, starting at 0 
  let totalExp1 = hand1.reduce((exp, pokemons) => exp + pokemons.exp, 0);
  let totalExp2 = hand2.reduce((exp, pokemons) => exp + pokemons.exp, 0);

  return (
    <div>
      <Pokedex array={pokemons} pokemons={hand1} exp={totalExp1} isWinner = {totalExp1 > totalExp2}/>
      <Pokedex array={pokemons} pokemons={hand2} exp ={totalExp2} isWinner = {totalExp2 > totalExp1}/>
    </div>
  );
}

export default Pokegame;