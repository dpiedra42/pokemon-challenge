import { useState, useEffect } from "react";
import styled from '@emotion/styled';
import Pokecard from "./Pokecard";

function Pokedex(props) {
    return(
    <Pokedexdiv>
        <PokedexH2>{props.isWinner ? 'Winning Team!' : 'Losing Team!'}</PokedexH2>
        <PokedexP>Total Exp: {props.exp}</PokedexP>
        <Pokecards>
            {props.pokemons.map(p => (
                <Pokecard id={p.id}
                          name={p.name}
                          type={p.type}
                          type2={p.type2} 
                          color={p.color1}
                          color2={p.color2}
                          exp={p.exp}
                          key={p.id}
                />
            ))}
        </Pokecards>
    </Pokedexdiv>
    )
}

const Pokedexdiv = styled.div`
    text-align: center;
    color: black;
    font-size: large;
    border-radius: 15px;
    background-color: rgb(255,255,255);
`
const PokedexH2 = styled.h2`
    margin-bottom: 0;
`
const PokedexP = styled.p`
    margin-top: 5px;
`
const Pokecards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export default Pokedex;