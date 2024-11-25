// Ficheiro de onde vão ser importadas as variáveis JS que vão servir para estilizar tudo
import { createGlobalStyle, css, keyframes } from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//ICONS
import { BsFillCameraReelsFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiEslint } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiPrettier } from 'react-icons/si';
import { SiJest } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiStyledcomponents } from 'react-icons/si';
import { IoLogoGithub } from 'react-icons/io';
import { FaYoutube } from 'react-icons/fa';
import { TbMovie } from 'react-icons/tb';
//-----------------------------------------GLOBAL------------------------------------------------------

// VALORES CSS
export const BackgroundColor = css`
  background-color: #f8f9fa;
`;

// FONTE DO CORPO
export const BodyFont = css`
  font-family: 'Dosis', sans-serif;
`;

// FONTE DOS HEADINGS
export const HeadingFont = css`
  font-family: 'Effra', sans-serif;
`;

// COMPONENTES ESTILIZADOS
export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Effra';
    src: url('/fonts/Effra.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    ${BodyFont}
    margin: 0;
    padding: 0;
    height: 100vh;
    
  }

  html {
    ${BackgroundColor}
    height: 100vh;
    margin: 0;
    padding: 0;

  }



  h1, h2, h3, h4, h5, h6 {
    ${HeadingFont}
  }
`;

//-----------------------------------------ICONOGRAFIA------------------------------------------------------

//MOVIE ICON
export const MovieIcon = styled(BsFillCameraReelsFill)`
  margin-right: 0.5rem;
  font-size: 1.5rem;
`;

//SEARCH ICON
export const SearchIcon = styled(FaSearch)`
  margin-right: 0.5rem;
  font-size: 1.5rem;
`;

//REACT ICON
export const ReactIcon = styled(FaReact)`
  margin-right: 0.5rem;
  font-size: 1rem;
  color: #0056b3;
`;

//ESLINT ICON
export const EsLintIcon = styled(SiEslint)`
  margin-right: 0.5rem;
  font-size: 1rem;
  color: #0056b3;
`;

//JAVASCRIPT ICON
export const JavaScriptIcon = styled(IoLogoJavascript)`
  margin-right: 0.5rem;
  font-size: 1rem;
  color: #0056b3;
`;

//PRETTIER ICON
export const PrettierIcon = styled(SiPrettier)`
  margin-right: 0.5rem;
  font-size: 1rem;
  color: #0056b3;
`;

//JEST ICON
export const JestIcon = styled(SiJest)`
  margin-right: 0.5rem;
  font-size: 1rem;
  color: #0056b3;
`;

//REDUXJS ICON E RTKQUERY
export const ReduxIcon = styled(SiRedux)`
  margin-right: 0.5rem;
  font-size: 1rem;
  color: #0056b3;
`;

//STYLED COMPONENTS
export const StyledComponentsIcon = styled(SiStyledcomponents)`
  margin-right: 0.5rem;
  font-size: 1rem;
  color: #0056b3;
`;

//YOUTUBE
export const OMDBIcon = styled(TbMovie)`
  margin-right: 0.5rem;
  font-size: 1rem;
  color: #0056b3;
`;

//YOUTUBE
export const YoutubeIcon = styled(FaYoutube)`
  margin-right: 0.5rem;
  font-size: 1rem;
  color: #0056b3;
`;

//GITHUB
export const GithubIcon = styled(IoLogoGithub)`
  margin-right: 0.5rem;
  font-size: 1rem;
  color: #0056b3;
`;
//-----------------------------------------NAVBAR------------------------------------------------------
//NAVBAR
export const NavbarStyled = styled.nav`
  background-color: #0056b3;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 0.25rem #e6e6e6;
`;

//ANIMACAO CâMARA NAVBAR
const cameraAnimation = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
`;

//ANIMACAO SEARCH NAVBAR
const searchAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

//LINKS NAVBAR
export const NavbarItemMovie = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;

  &:hover {
    animation: ${cameraAnimation} 1s infinite;
    color: #007bff;
  }
`;

export const NavbarItemSearch = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;

  &:hover {
    animation: ${searchAnimation} 1s infinite;
    color: #007bff;
  }
`;

//-----------------------------------------HOMEPAGE------------------------------------------------------

//STATIC CONTENT HOMEPAGE
export const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 60vw;
  margin: 1rem auto;
  background-color: #fff;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

//TÍTULO HOMPAGE
export const HomeTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

//PARÁGRAFO HOMEPAGE
export const HomeParagraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`;

//SECTION TILE HOMEPAGE
export const HomeSectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

//SECTION TILE#2 HOMEPAGE
export const HomeSectionTitle2 = styled.h3`
  font-size: 1%.5;
  margin-bottom: 0%.5;
`;

//SMALL SECTIOM TITLE
export const HomeList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 2rem 0;
`;

// LISTED ITEM HOMEPAGE
export const HomeListItem = styled.li`
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

//LINK HOMEPAGE
export const HomeLink = styled.a`
  color: #000;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`;

//-------------------------------------SEARCH-----------------------------------------------

//CARD SEARCH
export const CardSearch = styled.div`
  max-width: 75vw;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

//HEADING SEARCH
export const HeadingSearch = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

//PARAGRAFOR SEACRCH
export const ParagraphSearch = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;

  //BOLD SEARCH
  b {
    font-weight: bold;
  }
`;

//ERROR SEARCH
export const ErrorSearch = styled.p`
  font-size: 1rem;
  color: #ff0000;
  margin-bottom: 1.5rem;
`;

//NOTAS SEARCH
export const NoteSearch = styled.p`
  font-size: 0.875rem;
  color: #000;
  margin-top: 1.5rem;
  font-weight: bold;
`;

//FORM SEARCH
export const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  //LABEL SEARCH
  label {
    margin-bottom: 1rem;
    width: 100%;
    text-align: left;
  }

  //INPUT SEARCH
  input,
  select {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  //BUTTON SEARCH
  button {
    padding: 0.75rem 1.5rem;
    background-color: #0056b3;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;

    //HOVER SEARCH
    &:hover {
      background-color: #004494;
    }
  }
`;
