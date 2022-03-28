import { useState, useEffect } from "react";
import styled from '@emotion/styled';
import Pokecard from "./Pokecard";

function Pokedex(props) {
    return(
    <Pokedexdiv>
        <h2 suppressHydrationWarning={true}>{props.isWinner ? 'Winning Team!' : 'Losing Team!'}</h2>
        <p suppressHydrationWarning={true}>Total Exp: {props.exp}</p>
        <Pokecards>
            {props.pokemons.map(p => (
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} key={p.id}/>
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
    background-color: rgb(252,252,252);
`

const Pokecards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export default Pokedex;