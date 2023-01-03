import  styled  from 'styled-components';
import chamada from '../../Img/chamadax2.png'

export const Logo = styled.img`
    width:12vw;
    height:2vw;

    @media screen and (max-width: 720px){
        height:4vw;
        width: 18vw;
    }
`
export const Section = styled.section`
    width: 100%;
    height: 45vw;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 720px){
        height:50vw
    }
`

export const Nav = styled.nav`
    width: 100%;
    height: 5vw;
    padding: 0 4vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 720px){
        height:7vw
    }
`
export const Menu = styled.ul`
    list-style: none;
    width: 35%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 720px){
        width: 50%;
    }
   `
export const Topico = styled.li`
    font-weight: 600;
    font-size: 1.2vw;
    color:#005BD5;
    cursor: pointer;

&:hover{
    text-decoration: underline;
}

&.botao{
        letter-spacing: 0.2vw;
        padding: .6vw 1.5vw;
        font-size: 1vw;
        font-weight:400 bold;
        background-color: #005BD5;
        color:#FFF;
        border-radius: 2vw;
        cursor: pointer;
        transition: 5ms;
    }

    @media screen and (max-width: 720px){
        font-size: 2vw;

        &.botao{
            padding: 1vw 2.5vw;
            font-size: 1.5vw;
        }
    }
`

export const Chamada = styled.section`
    width: 100%;
    height: 45vw;
    display: flex;
    flex-direction: column;
    background-image: url(${chamada});
    background-size: cover;
    background-repeat: no-repeat;
`

export const Caixa = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    margin: 0 3.5vw;
    gap: 3vw;
`

export const Titulo = styled.h1`
    font-size: 6vw;
    color: #005BD5;
    font-weight: bold;
    line-height: 6vw;
`
export const Barra = styled.input`
    width: 65%;
    height: 4vw;
    font-size: 1.2vw;
    border-radius: 2vw;
    border: none;
    padding: 0 2vw;

    @media screen and (max-width: 720px){
        font-size: 2vw;
        width: 75%;
        height: 5vw;
    }
`
export const Botao = styled.button`
    width: 20%;
    height: 3.5vw;
    letter-spacing: 0.2vw;
    padding: 0.1vw 1.5vw;
    font-size: 1vw;
    font-weight:400 bold;
    background-color: #005BD5;
    color:#FFF;
    border-radius: 2vw;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 720px){
        width: 30%;
        height: 4.5vw;
        font-size: 1.5vw;
    }
`