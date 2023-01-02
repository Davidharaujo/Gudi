import  styled  from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 4em;
    background-color: #005BD5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5em;
`

export const Titulo = styled.h1`
    color: #fff;
    font-size: 2.5em;
`

export const Barra = styled.input`
    width: 30%;
    height: 3em;
    border-radius: 2em;
    border: none;
    padding-left: 1.5em;
    

    &::placeholder{
        color: #AFB3B8;
    }
`

export const CaixaTexto = styled.textarea`
    width: 30%;
    height: 6em;
    border-radius: 2em;
    border: none;
    padding-left: 1.5em;
    padding-right: 1.5em;
    padding-top: 1em;
    color: #AFB3B8;
    text-align: top;

    &::placeholder{
        color: #AFB3B8;
    }
`

export const Botao = styled.button`
    width: 10%;
    height: 3em;
    margin-top: 1em;
    text-transform:uppercase;
    background-color: transparent;
    color: #fff;
    font-weight: 300;
    letter-spacing: 0.2em;
    border-radius: 2em;
    border: 1px solid;
    cursor: pointer;

    &:hover{
        background-color: #fff;
        color: #005BD5;
        border: none;
        transition: 500ms;
    }
`