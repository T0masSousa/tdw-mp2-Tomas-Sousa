import React from 'react';

//STYLES
import {
  HomeContainer,
  HomeTitle,
  HomeParagraph,
  HomeParagraphCentered,
  HomeSectionTitle,
  HomeSectionTitle2,
  HomeList,
  HomeListItem,
  HomeLink,
  ReactIcon,
  EsLintIcon,
  JavaScriptIcon,
  PrettierIcon,
  JestIcon,
  ReduxIcon,
  StyledComponentsIcon,
  GithubIcon,
  YoutubeIcon,
  OMDBIcon,
} from '../Styles/GlobalStyles.js';

const HomeStatic = () => {
  return (
    <HomeContainer>
      <HomeTitle>Movie Time</HomeTitle>
      <HomeParagraph>
        O Movie Time é uma aplicação web que permite aos utilizadores pesquisar
        informações sobre os seus filmes favoritos de forma rápida e intuitiva.
        Esta aplicação utiliza a API OMDB (Open Movie Database) para obter dados
        detalhados sobre filmes, como o título, ano de lançamento, realizador,
        elenco, género e avaliações. Além disso, para proporcionar uma
        experiência ainda mais completa, o Movie Time também faz pedidos à API
        do YouTube Data para obter trailers oficiais ou vídeos relacionados com
        os filmes pesquisados. Com um design simples e funcional, o objetivo
        deste projeto é oferecer aos utilizadores uma forma prática de explorar
        e descobrir novos filmes, além de poderem assistir aos trailers
        diretamente na plataforma.
      </HomeParagraph>
      <HomeSectionTitle>Tech Stack</HomeSectionTitle>
      <HomeSectionTitle2>Framework Frontend</HomeSectionTitle2>
      <HomeList>
        <HomeListItem>
          <HomeLink
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReactIcon />
            React
          </HomeLink>
        </HomeListItem>
      </HomeList>
      <HomeSectionTitle2>Ferramentas Desenvolvimento</HomeSectionTitle2>
      <HomeList>
        <HomeListItem>
          <HomeLink
            href="https://eslint.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EsLintIcon />
            EsLint
          </HomeLink>
        </HomeListItem>
        <HomeListItem>
          <HomeLink
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <JavaScriptIcon />
            Javascript
          </HomeLink>
        </HomeListItem>
        <HomeListItem>
          <HomeLink
            href="https://prettier.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrettierIcon />
            Prettier
          </HomeLink>
        </HomeListItem>
        <HomeListItem>
          <HomeLink
            href="https://jestjs.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <JestIcon />
            Jest
          </HomeLink>
        </HomeListItem>
        <HomeListItem>
          <HomeLink
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReduxIcon />
            Reduxjs
          </HomeLink>
        </HomeListItem>
        <HomeListItem>
          <HomeLink
            href="https://redux-toolkit.js.org/rtk-query/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReduxIcon />
            RTKQuery
          </HomeLink>
        </HomeListItem>
        <HomeListItem>
          <HomeLink
            href="https://styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledComponentsIcon />
            Styled Components
          </HomeLink>
        </HomeListItem>
      </HomeList>
      <HomeSectionTitle2>APIs Utilizadas</HomeSectionTitle2>
      <HomeList>
        <HomeListItem>
          <HomeLink
            href="https://www.omdbapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <OMDBIcon />
            OMDB - Open Movie Database
          </HomeLink>
        </HomeListItem>
        <HomeListItem>
          <HomeLink
            href="https://developers.google.com/youtube/v3?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon />
            Youtube Data
          </HomeLink>
        </HomeListItem>
      </HomeList>
      <HomeSectionTitle>Autor</HomeSectionTitle>
      <HomeList>
        <HomeListItem>
          <HomeLink
            href="https://github.com/T0masSousa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            @T0masSousa
          </HomeLink>
        </HomeListItem>
      </HomeList>
      <HomeParagraphCentered>
        Hosted on{' '}
        <HomeLink
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Vercel</b>
        </HomeLink>
      </HomeParagraphCentered>
    </HomeContainer>
  );
};

export default HomeStatic;
