import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import LanguageContext from '../../context/LanguageContext';
import HeaderInfo from '../../constants/HeaderInfo.json';


const Header = () =>  {
  const {idiom, setIdiom} = useContext(LanguageContext);

  const actualInfos = () => HeaderInfo.find((info) => info.language === idiom)

  return (

    <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: '20px'}}>
          <Span>{actualInfos().title}</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
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
      <SocialIcons onClick={() => window.open('https://wa.me/5531998892636?text=Olá,%20vi%20o%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20seu%20trabalho.', '_blank')}>
        <AiOutlineWhatsApp size="3rem" />
      </SocialIcons>
      <li>
        {
          <NavLink onClick={() => setIdiom('PT')}>&#127463;&#127479;</NavLink>
        }
        {
          <NavLink onClick={() => setIdiom('EN')}>&#127482;&#127480;</NavLink>
        }
        {
          <NavLink onClick={() => setIdiom('ES')}>&#127466;&#127480;</NavLink>
        }
        {
          <NavLink onClick={() => setIdiom('JP')}>&#127471;&#127477;</NavLink>
        }
    </li>
    </Div3>
  </Container>
  )
};

export default Header;
