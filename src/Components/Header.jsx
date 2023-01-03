import React from 'react';
import logo from '../Img/Logox2.png';
import * as S from './Style/HeaderStyle.jsx'

function Header() {
    return ( 
        <S.Section>
            <S.Nav>
                <S.Logo src={logo} alt="Logo da Marca VeriGudi" />
                <S.Menu>
                    <S.Topico>Sobre</S.Topico>
                    <S.Topico>Benefícios</S.Topico>
                    <S.Topico>Contato</S.Topico>
                    <S.Topico className='botao'>AGENDAR</S.Topico>
                </S.Menu>
            </S.Nav>
            <S.Chamada>
                <S.Caixa>
                    <S.Titulo>Para qual estado você deseja ir?</S.Titulo>
                    <S.Barra type="text" placeholder='Pesquisar' />
                    <S.Botao>BUSCAR</S.Botao>
                </S.Caixa>
            </S.Chamada>
        </S.Section>
     );
}

export default Header;