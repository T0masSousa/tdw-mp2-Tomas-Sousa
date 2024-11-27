//ORGANIZADO EM SECÇÕES E USA IDENTIFICAÇÃO DE CADA PÁGINA
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
import { FaStar } from 'react-icons/fa';

//-----------------------------------------GLOBAL------------------------------------------------------

//COR BG
export const BackgroundColor = css`
  background-color: #f8f9fa;
`;

//FONT BODY
export const BodyFont = css`
  font-family: 'Dosis', sans-serif;
`;

//FONT HEADING
export const HeadingFont = css`
  font-family: 'Effra', sans-serif;
`;

//ESTILOS GLOBAIS
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

//LOADER CENTRADO
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

//LOADER H1
export const LoaderH1 = styled.h1`
  color: #0056b3;
`;

//CONTAINER ERRO
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

//MENSAGEM ERRO
export const ErrorMessage = styled.p`
  margin-bottom: 1rem;
  font-size: 1.25rem;
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

//OMDB
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

//ANIMAÇÃO NAVBAR
const shakeAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(2px);
  }
  75% {
    transform: translateX(-2px);
  }
`;

//LINKS NAVBAR
export const NavbarItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;

  &:hover {
    animation: ${shakeAnimation} 0.5s ease;
    color: #00ceff;
  }
`;
//-----------------------------------------HOMEPAGE------------------------------------------------------

//STATIC CONTENT HOMEPAGE
export const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 60vw;
  margin: 1rem auto;
  background-color: #fff;
  box-shadow: 0 -0.35rem 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
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

//PARÁGRAFO HOMEPAGE
export const HomeParagraphCentered = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666;
  text-align: center;
`;

//SECTION TILE HOMEPAGE
export const HomeSectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

//SECTION TILE#2 HOMEPAGE
export const HomeSectionTitle2 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
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

//LINK HOMEPAGE CENTRADO
export const HomeLinkCentered = styled.a`
  color: #000;
  text-decoration: none;
  text-align: center;

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
  box-shadow: 0 -0.35rem 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
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
    border-radius: 0.25rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: background-color 0.3s;
    ${BodyFont}

    //HOVER SEARCH
    &:hover {
      transition: transform 0.5s ease;
      transform: scale(1.1);
      background-color: #004494;
    }
  }
`;
//-------------------------------------RESULTS-----------------------------------------------
//CONTAINER CARD
export const ListResultsContainer = styled.div`
  padding: 2rem;
`;

//P DESCRIÇÃO CARDS
export const ListResultsParagraph = styled.p`
  text-align: center;
`;

//LIST RESULTS FILTER CONTAINER
export const ListResultsFiltersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2.5rem;
  padding: 0 2rem;
`;

//CADA FILTRO
export const ListResultsFilter = styled.div`
  display: flex;
  flex-direction: column;

  select {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
`;

//FEEDBACK P
export const ListResultsFeedbackP = styled.p`
  text-align: center;
`;

//CARDS CONTAINTER
export const ListResultsResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.75rem;
  justify-content: center;
`;

//CARDS
export const ListResultsCard = styled.div`
  border-radius: 0.4rem;
  padding: 0.8rem;
  width: 20vw;
  background-color: #fff;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

//CONTAINER IMAGENS
export const ListResultsMovieImageContainer = styled.div`
  width: 100%;
  height: 60%;
  margin-bottom: 2.5rem;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//IMAGEM CARDS
export const ListResultsMovieImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 0.3rem;
  object-fit: cover;
`;

//NOME CARDS
export const ListResultsMovieTitle = styled.h3`
  margin: 0.5rem 0;
  text-align: start;
`;

//INFO CARDS
export const ListResultsMovieInfo = styled.p`
  margin: 0.5rem 0;
  text-align: start;
`;

//CENTERED FEEDBACK
export const ListResultsMovieInfo2 = styled.p`
  margin: 0.5rem 0;
  text-align: center;
  color: red;
`;

//BUTTON CARDS
export const ListResultsButtonCards = styled(Link)`
  text-align: center;
  padding: 0.75rem 1.5rem;
  background-color: #0056b3;
  width: 50%;
  border: none;
  color: #fff;
  text-decoration: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 1.5rem auto 0 auto;
  transition: background-color 0.3s;

  //HOVER SEARCH
  &:hover {
    transition: transform 0.5s ease;
    transform: scale(1.1);
    background-color: #004494;
  }
`;
//-------------------------------------DETAILS-----------------------------------------------
//CARD DETALHES
export const DetailsCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 -0.35rem 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

//IMAGEM DETALHES - CONTAINER
export const DetailsImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//IMAGEM DETALHES
export const DetailsMovieImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

//INFORMAÇÃO À DIREITA
export const DetailsContainer = styled.div`
  flex: 2;
  padding-left: 2rem;
`;

//NOME FILME
export const DetailsMovieTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

//DETALHES CONTEÚDO
export const DetailsMovieInfo = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

//VÍDEO
export const DetailsTrailerContainer = styled.div`
  margin-top: 2rem;
  text-align: start;
`;

//TEXTO TRAILER
export const DetailsTrailerTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

//ANIMAÇÃO ESTRELAS
const RotateStarsonHover = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

//ESTRELAS DETALHES QUE PREENCHEM CONFORME O VALOR
export const DetailsStars = styled(FaStar)`
  font-size: 1.3rem;
  margin-left: 0.3rem;
  color: ${(props) => (props.filled ? '#FFD700' : '#ccc')};
  transition: transform 0.3s;

  &:hover {
    animation: ${RotateStarsonHover} 0.8s linear;
  }
`;
//------------------------------------------------------------------------------------
