import Main from './Components/Main'
import Footer from './Components/Footer'
import Header from './Components/Header'
import * as S from './Components/Style/GlobalStyle'
import React from 'react';

function App() {
  return (
    <section>
      <S.GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
