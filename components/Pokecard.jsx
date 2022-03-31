import Image from "next/image";
import styled from '@emotion/styled';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const PokecardDiv = styled.div `
    /* box-shadow: 7px 10px 12px -5px paleturquoise; */
    /* background-color: rgb(242, 242, 242); */
    border-radius: 10px;
    width: 250px;
    padding: 10px;
`
const ImageDiv = styled.div `
    background-color: rgb(242,242,242);
`
const Pokename = styled.h1 `
    color: black;
    font-weight: 400;
    margin: 0px;
    display: flex;
    justify-content: left;
    font-size: x-large;
`
const PokeInfo = styled.div`
    /* font-style: italic; */
    color: ${props => props.colorStyle};

`
const PokeExp = styled.div `
    color: grey;
    display: flex;
    justify-content: left;
    font-size: small;
`
function Pokecard(props) {
    const typecolor = {
        Normal: 'grey',
        Water: 'blue',
        Bug: 'green',
        Flying: 'lightblue',
        Electric: 'yellow',
        Fairy: 'pink',
        Ghost: 'magenta',
        Poison: 'purple',
        Fire: 'red'
    };

    function padToThree(number) {
        if (number<=999)
        {
            number = ("00"+number).slice(-3);
        }
        return (number);
      }

    let img_src = `${POKE_API}${padToThree(props.id)}.png`;
    console.log(props.type);
    return(
        <PokecardDiv>
            <ImageDiv>
                <Image src={img_src} alt='pokemon' width={200} height={200}/>
            </ImageDiv>
            <PokeExp>EXP: {props.exp}</PokeExp>
            <Pokename>{props.name}</Pokename>
            <PokeInfo colorStyle={typecolor[() => props.type]}>Type: {props.type}</PokeInfo>
        </PokecardDiv>
    )
}

export default Pokecard;