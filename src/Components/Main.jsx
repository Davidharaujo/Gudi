import React from 'react';
import * as S from './Style/MainStyle.jsx'
import grade1 from './Img/grade1.png'
import grade2 from './Img/grade2.png'
import grade3 from './Img/grade3.png'


function Main() {
    return ( 
        <S.Grade>
            <S.CaixaG1>
                <S.ImagemGrade src= {grade1} alt="" />
                <S.CaptionGrade>
                    <hr /><h2>VIAGENS NACIONAIS</h2>
                    <p>O clima perfeito, no lugar perfeito</p>
                    <p>Planeje sua viagem com sua paquera, compartilhar momentos preciosos juntos não tem preço.</p>
                    <button>AGENDAR</button>
                </S.CaptionGrade>
            </S.CaixaG1>
            <S.CaixaG2>
                
                <S.CaptionGrade>
                    <hr /><h2>VIAGENS NACIONAIS</h2>
                    <p>Curta uma nova vibe entre amigos</p>
                    <p>Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi.</p>
                    <button>AGENDAR</button>
                </S.CaptionGrade>
                <S.ImagemGrade src={grade2} alt="" />
            </S.CaixaG2>
            <S.CaixaG3>
                <S.ImagemGrade src={grade3} alt="" />
                <S.CaptionGrade>
                    <hr /><h2>VIAGENS NACIONAIS</h2>
                    <p>Algumas experiências são inexplicáveis</p>
                    <p>Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural.</p>
                    <button>AGENDAR</button>
                </S.CaptionGrade>
            </S.CaixaG3>
            <S.CaixaP1>
                <button>RIO DE JANEIRO</button>
            </S.CaixaP1>
            <S.CaixaP2>
                <button>RIO DAS OSTRAS</button>
            </S.CaixaP2>
            <S.CaixaP3>
                <button>CALDAS NOVAS</button>
            </S.CaixaP3>
            <S.CaixaP4>
                <button>AMAZONAS</button>
            </S.CaixaP4>
        </S.Grade>
     );
}

export default Main;