import styled from 'styled-components';
import { switcher } from '../../components/store';
import { useSnapshot } from 'valtio';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Aside }  from '../../components/Aside';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import SpyGlass from '../icons/SpyGlass';
import GitAlt from '../icons/GitAlt';
import Youtube from '../icons/Youtube';
import { Headline } from '../common/Headline';
import { Routes } from '../layout/Routes';
import Marquee from 'react-fast-marquee';
import { attached_1, attached_2, attached_3 } from './constant';
import Typewriter  from '../common/Typewriter';

export default function Homepage() {
  const snap2 = useSnapshot(switcher);
  const { st, reverse } = snap2;
  return (
    <HomeContainer>

       <Header bg='#2c3343'>
          gfouz portfolio
          <Button st={st} reverse={reverse} />
       </Header>

       <HomepageMain>
        <MainPictureContainer>
          <MainPicture />
        <Headline size='1.3em' center color='#451a23' bolder spacing='5px' fontfam='signika'>
          <Typewriter 
           color='#451a23'
           text='Fullstack developer' 
          />
        </Headline>  
        <SelfReminder>
          <p>"{attached_3}"</p> 
        </SelfReminder>
        <Line />
        </MainPictureContainer>
        

        <LogoContainer>
          <SpyGlass fontSize='40px' color='#451a23' />
        </LogoContainer>
        <Headline center bolder upper m='0 0 2em 0'>Technologies</Headline>
        <Marquee>
          <Headline bolder color='#451a23' spacing='6px' upper fontfam='signika'>
            ReactJS styled-components valtio react-query react-hook-form axios eslint prettier
            typescript ExpressJS
          </Headline>
        </Marquee>
      </HomepageMain>

      <Aside bg='#2c3343'>
         <ProfileCard>
            <Headline upper >Overview</Headline>
            <p> {attached_1} </p>
          </ProfileCard>
          <RemoteLinks>
             <YoutubeLink>
                  YouTube Channel
                  <Youtube fontSize='30px' color='#c40550' />
             </YoutubeLink>
             <GithubLink>
                 Github Projects
                 <GitAlt fontSize='30px' color='#222222' />
             </GithubLink>
          </RemoteLinks>
          <ProfileCard>
            <p> {attached_2} </p>
          </ProfileCard>
          
      </Aside>  
      <Sidebar options={ Routes } />
      <Footer bg='#2c3343'>Portfolio &copy; {new Date().getFullYear()}</Footer> 

    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: #c2c5aa;
  display: grid;
  grid-template-areas:
    'header '
    'main'
    'aside'
    'footer';
  grid-template-rows: 60px 1fr 1fr 60px;
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    & {
      grid-template-columns: 1fr;
      width: 100%;
      grid-template-areas:
        'header  header  header'
        'main    main    aside'
        'footer  footer  footer';
      grid-template-rows: 60px 1fr 60px;
      grid-template-columns: 1fr;
    }
  }
  @font-face {
    font-family: 'signika';
    src: local('signika'), url('./fonts/signika.ttf') format('truetype');
    font-weight: bolder;
    font-display: block;
  }
`;
const HomepageMain = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainPictureContainer = styled.div`
 
`;
const MainPicture = styled.img.attrs({ src: './images/homepage.jpg', alt: 'knightman' })`
  margin: 0 auto;
  max-width: 100%;
  height: auto;
`;

const ProfileCard = styled.div`
  text-align: left;
  color: #451a23;
  color: #c2c5aa;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 1px 35px #2c3343;
  max-width: 400px;
  padding: 1em;
  min-width: 320px;
  font-weight: bolder;
  font-family: signika;
  background-color: #2c3343;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3em 0;
`;
const RemoteLinks = styled.div`
  width: 100%;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  font-family: signika;
  background-color: #ffffff;
`;
const YoutubeLink = styled.a.attrs({ href:'https://youtube.com/@giovanifouz5033'})`
 margin: 0 1em;
 color: #c40550;
 font-weight: bolder;
`;
const GithubLink = styled.a.attrs({ href: 'https://github.com/gfouz'})`
 margin: 0 1em;
 font-weight: bolder;
`;
const SelfReminder = styled.div`
 font-weight: bolder;
 font-family: signika;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #222222;
`;
//https://gfouz.github.io/next-blog-2023

