import React from 'react';
import { DiFirebase, DiMysql, DiNodejs, DiPhotoshop, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologias empregadas</SectionTitle>
    <SectionText>
      Já trabalhei com algumas tecnologias até o momento.
      No front-end com javascript e react(LISTAR OUTRAS AQUI (REACT HOOKS, CONTECT API, ...)) e no back-end com javascript/typescript(EXPRESS, .....)
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with React.js <DiReact size="2rem" />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with Node.js <DiNodejs size="2rem" /> and MYSQL <DiMysql size="2rem"/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhotoshop size="3rem" />
        <ListContainer>
          <ListTitle>Design</ListTitle>
          <ListParagraph>
            Experience with tools like Photoshop <DiPhotoshop size="2rem" /> and ibisPaint
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
