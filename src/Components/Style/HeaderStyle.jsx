import  styled  from 'styled-components';
import chamada from '../Img/chamadax2.png'

export const Logo = styled.img`
    width:12em;
    height:2.5em;
`
export const Section = styled.section`
    width: 100%;
    height: 50em;
    display: flex;
    flex-direction: column;
`

export const Nav = styled.nav`
    width: 100%;
    height: 5em;
    padding: 0 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Menu = styled.ul`
    list-style: none;
    width: 25%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 1em;
    color:#005BD5;

    .botao{
        letter-spacing: 0.2em;
        padding: 0.5em 1.5em;
        font-size: 0.9em;
        font-weight:400 bold;
        background-color: #005BD5;
        color:#FFF;
        border-radius: 2em;
        cursor: pointer;
        transition: 5ms;
    }
   `

export const Chamada = styled.section`
    width: 100%;
    height: 50em;
    display: flex;
    flex-direction: column;
    background-image: url(${chamada});
`

export const Caixa = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    margin: 0 3em;
    gap: 1.5em;
`

export const Titulo = styled.h1`
    font-size: 5em;
    color: #005BD5;
    font-weight: bold;
    line-height: 1em;
`
export const Barra = styled.input`
    width: 65%;
    height: 3em;
    font-size: 1em;
    border-radius: 2em;
    border: none;
    padding: 0 2em;
`
export const Botao = styled.button`
    width: 20%;
    height: 3em;
    letter-spacing: 0.2em;
    padding: 0.3em 1.5em;
    font-size: 0.9em;
    font-weight:400 bold;
    background-color: #005BD5;
    color:#FFF;
    border-radius: 2em;
    border: none;
    cursor: pointer;

`