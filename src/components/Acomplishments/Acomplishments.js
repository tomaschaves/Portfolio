import React, { useContext } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import AcomplishmentsData from '../../constants/AcomplishmentsInfo.json';
import LanguageContext from '../../context/LanguageContext';

const Acomplishments = () => {
  const {idiom} = useContext(LanguageContext);
  const actualInfos = () => AcomplishmentsData.filter((info) => info.language === idiom)

  return (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>   { /* TODO*/ }
      {actualInfos().map((card, index) => ( 
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
  )
};

export default Acomplishments;