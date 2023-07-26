import { useState } from 'react';
// import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents';

const Home = () => {
  // const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  // const [checkKonami, setCheckKonami] = useState([]);
  // const [show, setShow] = useState(false);

  // const handleKeyDown = (event) => {
  //   checkKonami.length > 9 && checkKonami.shift();
  //   checkKonami.push(event.key);
  //   setCheckKonami(checkKonami);
  //   checkKonamiFunction();
  // };
  
  // const checkKonamiFunction = () => {
  //   if(checkKonami.every((value, index) => value === konamiCode[index]) && checkKonami.length === 10) {
  //     setShow(true)
  //   } else {
  //     setShow(false)
  //   }
  // }

  return (
    <div tabIndex={0} /*onKeyDown={handleKeyDown}*/ id='root'>
    <head>
      <title>Portfólio Tomás Coutinho Chaves</title>
    </head>
      {/* {show && <h1>Deu!</h1>} */}
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      {/* { show && ( */}
        <Section>
          <SectionDivider />
          <br />
          <SectionTitle>
            Yahaha!
          </SectionTitle>
          <SectionText>
            Xablau
          </SectionText>
        </Section>
      {/* ) } */}
      {/* <Acomplishments /> */}
    </Layout>
    </div>
  );
};

export default Home;
