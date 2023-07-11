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
          {actualInfos().welcome1}
          <br />
          {actualInfos().welcome2}
        </SectionTitle>
        <SectionText>
          {
            actualInfos().subtext
          }
        </SectionText>
        <Button onClick={()=> window.open(actualInfos().downloadCVLink, '_blank')}>{ actualInfos().learnMoreButton }</Button>
      </LeftSection>
    </Section>
  )
};

export default Hero;