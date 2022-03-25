import { useState, useEffect } from "react";
import Pokecard from "./Pokecard";

function Pokedex(props) {
    
    function refreshPage(){
        window.location.reload(false);
    }

    return(
    <div>
        <h1 suppressHydrationWarning={true}>{props.isWinner ? 'Winning Hand!' : 'Losing Hand!'}</h1>
        <p suppressHydrationWarning={true}>Total Exp: {props.exp}</p>
        <button onClick={refreshPage}>Click to reload!</button>
        <div>
            {props.pokemons.map(p => (
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} key={p.id}/>
            ))}
        </div>
    </div>
    )
}

export default Pokedex;