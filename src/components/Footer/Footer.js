import React, { useContext } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import FooterInfo from '../../constants/FooterInfo.json';
import LanguageContext from '../../context/LanguageContext';

const Footer = () => {
  const {idiom} = useContext(LanguageContext);
  const actualInfos = () => FooterInfo.find((info) => info.language === idiom)
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href={`tel:${actualInfos().number}`}>{actualInfos().number}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:tomaschavesdev@gmail.com">
            tomaschavesdev@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan>{actualInfos().slogan}</Slogan> */}
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons onClick={() => window.open('https://github.com/tomaschaves/', '_blank')}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons onClick={() => window.open('https://www.linkedin.com/in/tomas-chaves-dev/', '_blank')}>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto:tomaschavesdev@gmail.com">
            <AiOutlineMail size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;