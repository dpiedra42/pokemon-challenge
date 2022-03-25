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
    color: rgb(246, 246, 109);
    font-size: large;
`

const Pokecards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export default Pokedex;