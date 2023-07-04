import React, { useState } from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import LanguageContext from '../context/LanguageContext'

export const Layout = ({children}) => {
  const [idiom, setIdiom] = useState('Portuguese'); 
  const provider = {
    idiom,
    setIdiom,
  };

  return (
    <LanguageContext.Provider value={ provider }>
      <Container>
        <Header/>
          <main>{children}</main> 
        <Footer/>
      </Container>
    </LanguageContext.Provider>
  )
}
