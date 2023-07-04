import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import { IoMdFlag } from 'react-icons/io';
import LanguageContext from '../../context/LanguageContext';


const Header = () =>  {
  const {idiom, setIdiom} = useContext(LanguageContext);

  return (

    <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: '20px'}}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
      <li>
          { idiom === 'Portuguese' ? 
            <NavLink onClick={() => setIdiom('English')}>&#127482;&#127480;</NavLink> :
            <NavLink onClick={() => setIdiom('Portuguese')}>&#127463;&#127479;</NavLink>
          }
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
