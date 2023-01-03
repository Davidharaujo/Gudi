// IMPORTS //

import  styled  from 'styled-components';
import gradep1 from '../../Img/gradep1.png'
import gradep2 from '../../Img/gradep2.png'
import gradep3 from '../../Img/gradep3.png'
import gradep4 from '../../Img/gradep4.png'

// COMPONENTES BÁSICOS DA PARTE UM: GRID DE IMAGENS//


export const ImagemGrade = styled.img`
    width: 50%;
`

export const CaptionGrade = styled.figcaption`
    width: 50%;
    background-image: linear-gradient(180deg, #005BD5, #002E6B);
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    padding-left: 4vw;
`

export const Caixa = styled.div`
    width: 100%;
    height: 3.5vw;
    display: flex;
    align-items: center;
    gap: .5em;
`

export const Linha = styled.hr`
    width: 6%;
    color: #fff;
    text-align: center;
`

export const Titulo = styled.h2`
    text-transform: uppercase;
    font-weight: 300;
    font-size: .9vw;
    letter-spacing: .2vw;
`

export const Chamada = styled.p`
    width: 70%;
    margin-bottom: 1vw;
    font-size: 3.7vw;
    font-weight: bold;
    line-height: 4vw;
`

export const TextoGrid = styled.p`
    width: 80%;
    font-size: 1.3vw;
    font-weight: 300;
    margin-bottom: 1.5vw;
`
export const BotaoGrid = styled.button`
    width: 20%;
    height: 4vw;
    background-color: transparent;
    color: #fff;
    font-weight: 300;
    font-size: 1vw;
    letter-spacing: 0.2vw;
    border-radius: 2vw;
    border: 1px solid;
    cursor: pointer;

    &:hover{
        background-color: #fff;
        color: #005BD5;
        border: none;
        transition: 500ms;
    }
`

export const BotaoBlur = styled.button`
    width: 50%;
    height: 4vw;
    background-color: rgba(0,0,0,0.2);
    background-image: blur;
    color: #fff;
    font-weight: 300;
    font-size: 1vw;
    letter-spacing: 0.2vw;
    border-radius: 2vw;
    border: 1px solid;
    cursor: pointer;
    backdrop-filter: blur(5px);
`
// CONFIGURAÇÃO DO GRID DE IMAGENS

export const Grade = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
`

export const CaixaG1 = styled.figure`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
    display: flex;
    height: 100%;
`
export const CaixaG2 = styled.figure`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 5;
    display: flex;
    height: 100%;
`
export const CaixaG3 = styled.figure`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 5;
    grid-row-end: 7;
    display: flex;
    height: 100%;
`
export const CaixaP1 = styled.figure`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 7;
    grid-row-end: 8;
    background-image: url(${gradep1});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CaixaP2 = styled.figure`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 7;
    grid-row-end: 8;
    background-image: url(${gradep2});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CaixaP3 = styled.figure`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 7;
    grid-row-end: 8;
    background-image: url(${gradep3});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CaixaP4 = styled.figure`
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 7;
    grid-row-end: 8;
    background-image: url(${gradep4});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
