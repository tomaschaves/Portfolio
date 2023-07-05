import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import LanguageContext from '../../context/LanguageContext';
import HeaderInfo from '../../constants/HeaderInfo.json';


const Header = () =>  {
  const {idiom, setIdiom} = useContext(LanguageContext);

  const langs = [
    {language: "PT", code: "&#127463;&#127479;", nextLanguage: 'EN'},
    {language: "EN", code: "&#127482;&#127480;", nextLanguage: 'JP'},
    {language: "JP", code: "60 216 239 221", nextLanguage: 'PT'}]

  const actualFlag = (flag) => langs.find((lang) => lang.language === flag)
  const actualInfos = () => HeaderInfo.find((info) => info.language === idiom)

  return (

    <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: '20px'}}>
          <DiCssdeck size="3rem" /> <Span>{actualInfos().title}</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>{actualInfos().projects}</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>{actualInfos().technologies}</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>{actualInfos().about}</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>{actualInfos().contact}</NavLink>
        </Link>
      <li>
        {
          <NavLink onClick={() => setIdiom(actualFlag(idiom).nextLanguage)}>{actualFlag(idiom).nextLanguage}</NavLink>
        }
      </li>
    </li>
    </Div2>
    <Div3>
      <SocialIcons onClick={() => window.open('https://github.com/tomaschaves/', '_blank')}>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons onClick={() => window.open('https://www.linkedin.com/in/tomas-chaves-dev/', '_blank')}>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:tomaschavesdev@gmail.com">
        <AiOutlineMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
  )
};

export default Header;
