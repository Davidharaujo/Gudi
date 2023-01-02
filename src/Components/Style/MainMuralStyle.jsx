//IMPORTS //
import  styled  from 'styled-components';

//COMPOSIÇÃO DA MAIN PARTE DOIS: MURAL //

export const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const CaixaTexto = styled.div`
    width: 20%;
    margin: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    line-height: 2em;
`
export const TextoMural = styled.p`
    color: #8B8B8B;
    font-size: 1em;
    font-weight: 500;
`
export const ChamadaMural = styled.h1`
    color: #8B8B8B;
    font-weight: 800;
    font-size: 2.5em;
`
export const Mural = styled.figure`
    width: 80%;
    gap: 0.7em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 4em;
`
export const ImagemMural = styled.img`
    width: 25%;
`
//COMPOSIÇÃO DA MAIN PARTE TRÊS: TAGS //

export const CaixaTags = styled.div`
    width: 70%;
    display: flex;
    gap: 0.9em;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 4em;
`
export const Tag1 = styled.figure`
    width: 15%;
    height: 13em;
    padding-top: 2em;
    background-color: #EEEEEE;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1em;
    color: #005BD5;
    font-weight: 700;
`
export const Tag2 = styled.figure`
    width: 15%;
    height: 13em;
    padding-top: 2em;
    background-color: #005BD5;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1em;
    color: #fff;
    font-weight: 700;
    text-align: center;
`
export const TagImagem = styled.img`
    width: 60%;

    &.tag3{
        width:50%;
    }
`
export const TagTexto = styled.figcaption`
    width: 70%;
    text-align: center;
`