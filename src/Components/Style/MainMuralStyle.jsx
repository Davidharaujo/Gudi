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
    margin: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    line-height: 2.5vw;
    @media screen and (max-width: 720px){
        width: 30%;
        line-height: 3vw;
    }
`
export const TextoMural = styled.p`
    color: #8B8B8B;
    font-size: 1.2vw;
    font-weight: 500;
    @media screen and (max-width: 720px){
        font-size: 1.9vw;
    }
`
export const ChamadaMural = styled.h1`
    color: #8B8B8B;
    font-weight: 800;
    font-size: 2.8vw;
    @media screen and (max-width: 720px){
        font-size: 3.6vw;
    }
`
export const Mural = styled.figure`
    width: 80%;
    gap: 0.7vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 4vw;
`
export const ImagemMural = styled.img`
    width: 25%;
    @media screen and (max-width: 720px){
        width: 40%;
    }
`
//COMPOSIÇÃO DA MAIN PARTE TRÊS: TAGS //

export const CaixaTags = styled.div`
    width: 61%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4vw;
    @media screen and (max-width: 720px){
        width: 65%;
    }
`
export const Tag1 = styled.figure`
    width: 23%;
    height: 15vw;
    padding-top: 2vw;
    background-color: #EEEEEE;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1vw;
    color: #005BD5;
    font-weight: 700;
    @media screen and (max-width: 720px){
        width: 15vw;
        height: 17vw;
    }
`
export const Tag2 = styled.figure`
    width: 23%;
    height: 15vw;
    padding-top: 2vw;
    background-color: #005BD5;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1vw;
    color: #fff;
    font-weight: 700;
    text-align: center;

    @media screen and (max-width: 720px){
        width: 15vw;
        height: 17vw;
    }
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
    font-size: 1vw;

    @media screen and (max-width: 720px){
        font-size:1.5vw;
    }
`