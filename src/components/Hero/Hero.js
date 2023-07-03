import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem vindo <br/>
        Ao meu portfólio
      </SectionTitle>
      <SectionText>
        Escrever aqui o que eu ofereço à quem me contratar e o que posso ajudar eles a fazer
      </SectionText>
      <Button onclick={()=> window.location = 'https://google.com'}> Learn More</Button> { /* TODO*/ }
    </LeftSection>
  </Section>
);

export default Hero;