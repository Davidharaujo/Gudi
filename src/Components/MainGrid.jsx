import React from 'react';
import * as S from './Style/MainGridStyle.jsx'
import grade1 from '../Img/grade1.png'
import grade2 from '../Img/grade2.png'
import grade3 from '../Img/grade3.png'


function MainGrid() {
    return ( 
        <S.Grade>
            <S.CaixaG1>
                <S.ImagemGrade src= {grade1} alt="Casal ao por do sol." />
                <S.CaptionGrade>
                    <S.Caixa>
                        <S.Linha /><S.Titulo>VIAGENS NACIONAIS</S.Titulo>
                    </S.Caixa>
                    <S.Chamada>O clima perfeito, no lugar perfeito</S.Chamada>
                    <S.TextoGrid>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</S.TextoGrid>
                    <S.BotaoGrid>AGENDAR</S.BotaoGrid>
                </S.CaptionGrade>
            </S.CaixaG1>
            <S.CaixaG2>
                
                <S.CaptionGrade>
                    <S.Caixa>
                        <S.Linha /><S.Titulo>VIAGENS NACIONAIS</S.Titulo>
                    </S.Caixa>
                    <S.Chamada>Curta uma nova vibe entre amigos</S.Chamada>
                    <S.TextoGrid>Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi.</S.TextoGrid>
                    <S.BotaoGrid>AGENDAR</S.BotaoGrid>
                </S.CaptionGrade>
                <S.ImagemGrade src={grade2} alt="Amigos juntos." />
            </S.CaixaG2>
            <S.CaixaG3>
                <S.ImagemGrade src={grade3} alt="Familia curtindo piscina." />
                <S.CaptionGrade>
                    <S.Caixa>
                        <S.Linha /><S.Titulo>Viagens Nacionais</S.Titulo>
                    </S.Caixa>
                    <S.Chamada>Algumas experiências são inexplicáveis</S.Chamada>
                    <S.TextoGrid>Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural.</S.TextoGrid>
                    <S.BotaoGrid>AGENDAR</S.BotaoGrid>
                </S.CaptionGrade>
            </S.CaixaG3>
            <S.CaixaP1>
                <S.BotaoBlur>RIO DE JANEIRO</S.BotaoBlur>
            </S.CaixaP1>
            <S.CaixaP2>
                <S.BotaoBlur>RIO DAS OSTRAS</S.BotaoBlur>
            </S.CaixaP2>
            <S.CaixaP3>
                <S.BotaoBlur>CALDAS NOVAS</S.BotaoBlur>
            </S.CaixaP3>
            <S.CaixaP4>
                <S.BotaoBlur>AMAZONAS</S.BotaoBlur>
            </S.CaixaP4>
        </S.Grade>
     );
}

export default MainGrid;