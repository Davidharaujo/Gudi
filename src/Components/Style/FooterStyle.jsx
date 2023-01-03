import  styled  from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 10vw;
    display: flex;
    justify-content: space-around;
    margin-top: 3vw;
    margin-bottom: 3vw;
    @media screen and (max-width: 720px){
        height: 20vw;
    }
`

export const Logo = styled.img`
    width: 60%;
    @media screen and (max-width: 720px){
        width: 100%;
    }
`

export const Navigation = styled.nav`
    height: 10vw;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    @media screen and (max-width: 720px){
        height: 20vw;
        width: 18%;
        &.navesp{
            width: 25%;
            margin: 2vw;
        }
        &.contato{
            width: 13%;
        }
    }
`
export const Titulo = styled.h2`
    font-size: 1.2vw;
    color: #005BD5;
    cursor: pointer;
    font-weight: 700;
    @media screen and (max-width: 720px){
        font-size: 2vw;
    }
`
export const Menu = styled.ul`
    height: 10vw;
    list-style: none;
    @media screen and (max-width: 720px){
        height: 15vw;
    }
`
export const Topico = styled.li`
    font-size: 1vw;
    color: #005BD5;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
    @media screen and (max-width: 720px){
        font-size: 1.8vw;
    }
`