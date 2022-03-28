import Image from "next/image";
import styled from '@emotion/styled';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const PokecardDiv = styled.div `
    /* box-shadow: 7px 10px 12px -5px paleturquoise; */
    /* background-color: rgb(242, 242, 242); */
    border-radius: 10px;
    width: 250px;
    padding: 10px;
    margin: 1rem;
`
const ImageDiv = styled.div `
    background-color: rgb(242,242,242);
`
const Pokename = styled.h1 `
    color: black;
    font-weight: 400;
`
const PokeInfo = styled.div `
    color: black;
    font-style: italic;
`
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
        <PokecardDiv>
            <ImageDiv>
                <Image src={img_src} alt='pokemon' width={200} height={200}/>
            </ImageDiv>
            <Pokename suppressHydrationWarning={true} className="Pokecard-name">{props.name}</Pokename>
            <PokeInfo suppressHydrationWarning={true} className="Pokecard-info">Type: {props.type}</PokeInfo>
            <PokeInfo suppressHydrationWarning={true} className="Pokecard-info">EXP: {props.exp}</PokeInfo>
        </PokecardDiv>
    )
}

export default Pokecard;