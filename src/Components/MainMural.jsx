import React from 'react'
import * as S from './Style/MainMuralStyle'
import mural1 from '../Img/mural1.png'
import mural2 from '../Img/mural2.png'
import mural3 from '../Img/mural3.png'
import mural4 from '../Img/mural4.png'
import mural5 from '../Img/mural5.png'
import mural6 from '../Img/mural6.png'
import tag1 from '../Img/tag1.png'
import tag2 from '../Img/tag2.png'
import tag3 from '../Img/tag3.png'
import tag4 from '../Img/tag4.png'

export default function MainMural() {
  return (
    <S.Container>
        <S.CaixaTexto>
            <S.TextoMural>use a hashtag #brasilisverigudi</S.TextoMural>
            <S.ChamadaMural>Nosso mural de Experiências</S.ChamadaMural>
        </S.CaixaTexto>
        <S.Mural>
            <S.ImagemMural src={mural1} alt="Fotografias de viagens" />
            <S.ImagemMural src={mural2} alt="Fotografias de viagens" />
            <S.ImagemMural src={mural3} alt="Fotografias de viagens" />
            <S.ImagemMural src={mural4} alt="Fotografias de viagens" />
            <S.ImagemMural src={mural5} alt="Fotografias de viagens" />
            <S.ImagemMural src={mural6} alt="Fotografias de viagens" />
        </S.Mural>
        <S.CaixaTags>
            <S.Tag1>
                <S.TagImagem src={tag1} alt="Tag ilustrativa" />
                <S.TagTexto>O melhor do Brasil</S.TagTexto>
            </S.Tag1>
            <S.Tag2>
                <S.TagImagem src={tag2} alt="Tag ilustrativa" />
                <S.TagTexto>Cidades mais frequentadas</S.TagTexto>
            </S.Tag2>
            <S.Tag1>
                <S.TagImagem className='tag3' src={tag3} alt="Tag ilustrativa" />
                <S.TagTexto>Pontos turísticos</S.TagTexto>
            </S.Tag1>
            <S.Tag2>
                <S.TagImagem src={tag4} alt="Tag ilustrativa" />
                <S.TagTexto>Restaurantes</S.TagTexto>
            </S.Tag2>
        </S.CaixaTags>
    </S.Container>
  )
}
