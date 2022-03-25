import Image from "next/image";
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

function Pokecard(props) {

    function padToThree(number) {
        if (number<=999)
        {
            number = ("00"+number).slice(-3);
        }
        return (number);
      }

    let img_src = `${POKE_API}${padToThree(props.id)}.png`;
    return(
        <div>
            <h1 suppressHydrationWarning={true} className="Pokecard-name">{props.name}</h1>
            {/* <Image src={img_src} alt={props.name} layout='fill'/> */}
            <div suppressHydrationWarning={true} className="Pokecard-info">Type: {props.type}</div>
            <div suppressHydrationWarning={true} className="Pokecard-info">EXP: {props.exp}</div>
        </div>
    )
}



export default Pokecard;