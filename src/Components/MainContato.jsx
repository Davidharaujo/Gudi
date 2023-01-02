import React from 'react'
import * as S from './Style/MainContato'

export default function MainContato() {
  return (
    <S.Container>
        <S.Titulo>Fale conosco</S.Titulo>
        <S.Barra type="email" placeholder='Diga o seu melhor email'/>
        <S.Barra type="text" placeholder='Assunto'/>
        <S.CaixaTexto type="textarea" placeholder='Escreva sua mensagem'/>
        <S.Botao>Enviar</S.Botao>
    </S.Container>
  )
}
