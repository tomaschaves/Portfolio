import React, { useContext } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import ProjectsInfo from '../../constants/ProjectsInfo.json';
import LanguageContext from '../../context/LanguageContext';

const Projects = () => {
  const {idiom} = useContext(LanguageContext);
  const projects = () => ProjectsInfo.filter((project) => project.language === idiom);
  const projectTitle = { "PT": "Projetos", "EN": "Projects", "JP": "プロジェクトス", "ES": "Proyectos" };
  const codeVisit = [{ "language": "PT", "code": "Código", "visit": "Visitar" }, { "language": "EN", "code": "Code", "visit": "Visit" }, { "language": "JP", "code": "コード", "visit": "参観する"}, { "language": "ES", "code": "Código", "visit": "Visitar" }];
  const buttonsText = () => codeVisit.find((param) => param.language === idiom);

  return(
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>{projectTitle[`${idiom}`]}</SectionTitle>
      <GridContainer>
        {
          projects().map((project) => (
            <BlogCard key={project.id}>
              <Img src={project.image} />
              <TitleContent>
                <HeaderThree title="true">{project.title}</HeaderThree>
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
                <ExternalLinks onClick={() => window.open(project.source, '_blank')}>{buttonsText(idiom).code}</ExternalLinks>
                <ExternalLinks onClick={() => window.open(project.visit, '_blank')}>{buttonsText(idiom).visit}</ExternalLinks>
              </UtilityList>
            </BlogCard>
          ))
        }
      </GridContainer>
    </Section>
  )
};

export default Projects;