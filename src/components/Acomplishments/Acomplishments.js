import React, { useContext } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import AcomplishmentsData from '../../constants/acomplishments.json';
import LanguageContext from '../../context/LanguageContext';

const Acomplishments = () => {
  const {idiom} = useContext(LanguageContext);

  return (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>   { /* TODO*/ }
      {Object.values(AcomplishmentsData).map((card, index) => ( 
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