import React, { useContext } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import projects from '../../constants/projects.json';
import LanguageContext from '../../context/LanguageContext';

const Projects = () => {
  const {idiom} = useContext(LanguageContext);
  
  return(
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projetos</SectionTitle>
      <GridContainer>
      { /* TODO*/ }
        {
          Object.values(projects).map((project) => (
            <BlogCard key={project.id}>
              <Img src={project.image} />
              <TitleContent>
                <HeaderThree title>{project.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{project.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {
                    project.tags.split(", ").map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))
                  }
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks onClick={() => window.open(project.source, '_blank')}>Código</ExternalLinks>
                <ExternalLinks onClick={() => window.open(project.visit, '_blank')}>Visitar</ExternalLinks>
              </UtilityList>
            </BlogCard>
          ))
        }
      </GridContainer>
    </Section>
  )
};

export default Projects;