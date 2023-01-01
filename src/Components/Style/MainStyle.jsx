import  styled  from 'styled-components';
import gradep1 from '../Img/gradep1.png'
import gradep2 from '../Img/gradep2.png'
import gradep3 from '../Img/gradep3.png'
import gradep4 from '../Img/gradep4.png'

export const Grade = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
`
export const ImagemGrade = styled.img`
    width: 50%;
`

export const CaptionGrade = styled.figcaption`
    width: 50%;
`

export const CaixaG1 = styled.figure`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
    display: flex;
    height: 100%;
    border: solid black;
`
export const CaixaG2 = styled.figure`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 5;
    display: flex;
    height: 100%;
    border: solid black;

`
export const CaixaG3 = styled.figure`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 5;
    grid-row-end: 7;
    display: flex;
    height: 100%;
    border: solid black;

`
export const CaixaP1 = styled.figure`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 7;
    grid-row-end: 8;
    background-image: url(${gradep1});
    background-repeat: no-repeat;
`
export const CaixaP2 = styled.figure`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 7;
    grid-row-end: 8;
    background-image: url(${gradep2});
    background-repeat: no-repeat;
`
export const CaixaP3 = styled.figure`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 7;
    grid-row-end: 8;
    background-image: url(${gradep3});
    background-repeat: no-repeat;
`
export const CaixaP4 = styled.figure`
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 7;
    grid-row-end: 8;
    background-image: url(${gradep4});
    background-repeat: no-repeat;
`