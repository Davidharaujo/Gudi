import  styled  from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 4vw;
    background-color: #005BD5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    @media screen and (max-width: 720px){
        gap: 1.5vw;
    }
`

export const Titulo = styled.h1`
    color: #fff;
    font-size: 2.8vw;
    @media screen and (max-width: 720px){
        font-size: 3.6vw;
    }
`

export const Barra = styled.input`
    width: 30%;
    height: 3vw;
    border-radius: 2vw;
    border: none;
    padding-left: 1.5vw;

    &::placeholder{
        color: #AFB3B8;
        font-size: 1vw;
    }
    @media screen and (max-width: 720px){
        width: 45%;
        height: 5vw;

        &::placeholder{
            font-size: 1.5vw;
        }
    }
`

export const CaixaTexto = styled.textarea`
    width: 30%;
    height: 6vw;
    border-radius: 2em;
    border: none;
    padding-left: 1.5vw;
    padding-right: 1.5vw;
    padding-top: 1vw;
    text-align: top;

    &::placeholder{
        color: #AFB3B8;
        font-size: 1vw;
    }
    @media screen and (max-width: 720px){
        width: 45%;
        height: 10vw;
        border-radius: 3vw;

        &::placeholder{
            font-size: 1.5vw;
        }
    }
`

export const Botao = styled.button`
    width: 10%;
    height: 3vw;
    margin-top: 1vw;
    text-transform:uppercase;
    background-color: transparent;
    color: #fff;
    font-weight: 300;
    font-size: 1vw;
    letter-spacing: 0.3vw;
    border-radius: 2vw;
    border: 1px solid;
    cursor: pointer;

    &:hover{
        background-color: #fff;
        color: #005BD5;
        border: none;
        transition: 500ms;
    }

    @media screen and (max-width: 720px){
        width: 35%;
        height: 5vw;
        font-size: 1.8vw;
    }
`