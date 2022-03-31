import Pokedex from '../components/Pokedex';
import { useState, useEffect } from "react";
import styled from '@emotion/styled';

function Pokegame() {
  const pokemons = [
    {id: 4, name: 'Charmander', type: 'Fire', color1: 'white', exp: 62},
    {id: 7, name: 'Squirtle', type: 'Water', color1: 'white', exp: 63},
    {id: 11, name: 'Metapod', type: 'Bug', color1: 'white', exp: 72},
    {id: 12, name: 'Butterfree', type: 'Bug', type2: 'Flying', color1: 'white', exp: 178},
    {id: 25, name: 'Pikachu', type: 'Electric', exp: 112},
    {id: 39, name: 'Jigglypuff', type: 'Normal', type2: 'Fairy', exp: 95},
    {id: 94, name: 'Gengar', type: 'Ghost', type2: 'Poison', color1: 'white', color2: 'white', exp: 225},
    {id: 133, name: 'Eevee', type: 'Normal', exp: 65}
  ]
  
  const [hand1, setHand1] = useState([]);
  const [hand2, setHand2] = useState([...pokemons]);

  while (hand1.length < hand2.length)
  {
    let randIdx = Math.floor(Math.random() * hand2.length);
    // [0] pushes the first element instead of array, because splice returns an array
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
      <PokegameH1>Welcome to the Pokedex Challenge</PokegameH1>
      <PokegameP>Two teams will compete and the team with the highest total Exp wins!</PokegameP>
      <PokegameP>Your team is the one on top while the computers is the one on the bottom.</PokegameP>
      <Pokedex pokemons={hand1}
               exp={totalExp1}
               isWinner = {totalExp1 > totalExp2}
      />
      <button onClick={refreshPage}>Try Again</button>
      <Pokedex pokemons={hand2}
               exp ={totalExp2}
               isWinner = {totalExp2 > totalExp1}
      />
    </PokegameDiv>
  );
}

const PokegameDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;

  button {
    background-color: grey;
    color: white;
    font-family: "Montserrat Alternates", sans-serif;
    font-size: large;
    border: none;
    border-radius: 2px;
    margin: 10px;
    padding: 2px 10px 2px 10px;

    :hover {
      background-color: white;
      color: black;
    }
  }
`
const PokegameH1 = styled.h1`
  padding-top: 25px;
`
const PokegameP = styled.p`
  padding-bottom: 15px;
`

export default Pokegame;