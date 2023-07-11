import React, { useContext } from 'react';
import { DiFirebase, DiMysql, DiNodejs, DiPhotoshop, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import TechnologiesInfo from '../../constants/TechnologiesInfo.json';
import LanguageContext from '../../context/LanguageContext';

const Technologies = () => {
  const { idiom } = useContext(LanguageContext);
  const techData = () => TechnologiesInfo.find((info) => info.language === idiom);

  return(
    <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>{techData().usedTech}</SectionTitle>
      <SectionText>
        {techData().text}
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>{techData().frontend}</ListTitle>
            <ListParagraph>
              {techData().frontText}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>{techData().backend}</ListTitle>
            <ListParagraph>
              {techData().backText}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiPhotoshop size="3rem" />
          <ListContainer>
            <ListTitle>{techData().design}</ListTitle>
            <ListParagraph>
              {techData().designText}
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  )
};

export default Technologies;
