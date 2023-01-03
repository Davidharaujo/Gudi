import React from 'react'
import * as S from './Style/FooterStyle'
import logo from '../Img/Logox2.png'

function Footer() {
    return ( 
        <S.Container>
            <S.Navigation>
                <S.Logo src={logo} alt="Logomarca" />
                <S.Menu>
                    <S.Topico>Sobre nós</S.Topico>
                    <S.Topico>Mural de Memórias</S.Topico>
                    <S.Topico>Eventos Gudi</S.Topico>
                    <S.Topico>Nosso blog</S.Topico>
                </S.Menu>
            </S.Navigation>
            <S.Navigation>
                <S.Titulo>Contato</S.Titulo>
                <S.Menu>
                    <S.Topico>Chat Virtual</S.Topico>
                    <S.Topico>SAC Online</S.Topico>
                    <S.Topico>Ouvidoria</S.Topico>
                    <S.Topico>FAQ</S.Topico>
                </S.Menu>
            </S.Navigation>
            <S.Navigation>
                <S.Titulo>Benefícios</S.Titulo>
                <S.Menu>
                    <S.Topico>Conta Digital Gudi</S.Topico>
                    <S.Topico>Viaje com milhas</S.Topico>
                    <S.Topico>C6 Átomos</S.Topico>
                    <S.Topico>iD Jovem</S.Topico>
                </S.Menu>
            </S.Navigation>
            <S.Navigation>
                <S.Titulo>Lugares</S.Titulo>
                <S.Menu>
                    <S.Topico>O melhor do Brasil</S.Topico>
                    <S.Topico>Cidades frequentes</S.Topico>
                    <S.Topico>Pontos Turísticos</S.Topico>
                    <S.Topico>Restaurantes</S.Topico>
                </S.Menu>
            </S.Navigation>
            <S.Navigation>
                <S.Titulo>Curiosidades</S.Titulo>
                <S.Menu>
                    <S.Topico>Cultura e tradições</S.Topico>
                    <S.Topico>Pratos típicos</S.Topico>
                    <S.Topico>Mitos brasileiros</S.Topico>
                    <S.Topico>Carnaval</S.Topico>
                </S.Menu>
            </S.Navigation>
        </S.Container>
     );
}

export default Footer;