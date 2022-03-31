import Image from "next/image";
import styled from '@emotion/styled';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

function Pokecard(props) {
    const typeColor = {
        Normal: 'rgb(188,185,184)',
        Water: 'rgb(89,144,191)',
        Bug: 'rgb(124,158,77)',
        Flying: 'rgb(105,196,234)',
        Electric: 'rgb(234,214,87)',
        Fairy: 'rgb(243,188,230)',
        Ghost: 'rgb(119,99,159)',
        Poison: 'rgb(177,129,196)',
        Fire: 'rgb(234,131,61)'
    };

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
                <Image src={img_src}
                       alt='pokemon'
                       width={200}
                       height={200}
                       />
            </ImageDiv>
            <PokeExp>EXP: {props.exp}</PokeExp>
            <Pokename>{props.name}</Pokename>
            <div>
                <PokeInfo backColor={typeColor[props.type]} textColor={props.color}>{props.type}</PokeInfo>
                <PokeInfo backColor={typeColor[props.type2]} textColor={props.color2}>{props.type2}</PokeInfo>
            </div>
        </PokecardDiv>
    )
}

const PokecardDiv = styled.div `
    border-radius: 10px;
    width: 250px;
    padding: 10px;

    div {
        display: flex;
        flex-direction: row;
    }
`
const ImageDiv = styled.div `
    background-color: rgb(242,242,242);
    display: flex;
    justify-content: center;
`
const Pokename = styled.h1 `
    color: black;
    font-weight: 400;
    margin: 10px 0 5px 0;
    display: flex;
    justify-content: left;
    font-size: x-large;
`
const PokeInfo = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 5px;
    background-color: ${props => props.backColor};
    color: ${props => props.textColor};
    width: 40%;
    margin: 3px 3px 3px 0;
`
const PokeExp = styled.div `
    color: grey;
    display: flex;
    justify-content: left;
    font-size: small;
`

export default Pokecard;