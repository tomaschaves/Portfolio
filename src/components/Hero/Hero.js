import React, { useContext } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import LanguageContext from '../../context/LanguageContext';
import HeroInfo from '../../constants/HeroInfo.json';

const Hero = () => {
  const { idiom } = useContext(LanguageContext);
  const actualInfos = () => HeroInfo.find((info) => info.language === idiom);

  return(
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          {
            actualInfos().welcome
          }
        </SectionTitle>
        <SectionText>
          {
            actualInfos().subtext
          }
        </SectionText>
        <Button onclick={()=> window.location = 'https://google.com'}>{ actualInfos().learnMoreButton }</Button> { /* TODO*/ }
      </LeftSection>
    </Section>
  )
};

export default Hero;