import Pokedex from '../components/Pokedex';
import { useState, useEffect } from "react";
import styled from '@emotion/styled';

function Pokegame() {
  const pokemons = [
    {id: 4, name: 'Charmander', type: 'Fire', exp: 62},
    {id: 7, name: 'Squirtle', type: 'Water', exp: 63},
    {id: 11, name: 'Metapod', type: 'Bug', exp: 72},
    {id: 12, name: 'Butterfree', type: 'Bug, Flying', exp: 178},
    {id: 25, name: 'Pikachu', type: 'Electric', exp: 112},
    {id: 39, name: 'Jigglypuff', type: 'Normal, Fairy', exp: 95},
    {id: 94, name: 'Gengar', type: 'Ghost, Poison', exp: 225},
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

  function refreshPage(){
    window.location.reload(false);
  }

  return (
    <PokegameDiv>
      <h1>Welcome to the Pokedex Challenge</h1>
      <p>Two teams of pokemons will battle it out, but only the team with the most EXP will win!</p>
      <Pokedex array={pokemons} pokemons={hand1} exp={totalExp1} isWinner = {totalExp1 > totalExp2}/>
      <button onClick={refreshPage}>Click to reload!</button>
      <Pokedex array={pokemons} pokemons={hand2} exp ={totalExp2} isWinner = {totalExp2 > totalExp1}/>
    </PokegameDiv>
  );
}

const PokegameDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;

  button {
    background-color: rgb(246, 204,71);
  }
  h1 {
    padding-top: 30px;
    margin-bottom: 20px;
  }
  p{
    margin-top: 0px;
  }
`

export default Pokegame;