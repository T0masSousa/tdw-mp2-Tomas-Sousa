/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../src/App.js';
import SearchPage from '../src/Pages/SearchPage.js';
import '@testing-library/jest-dom';
import {
  useFetchMovieDetailsQuery,
  useFetchMoviesQuery,
} from '../src/reduxStore/omdbSlice.js';
import { useFetchTrailerQuery } from '../src/reduxStore/youtubeDataSlice.js';

// MOCK DAS OMDB
jest.mock('../src/reduxStore/omdbSlice.js', () => ({
  // MOCK DO PEDIDO
  useFetchMovieDetailsQuery: jest.fn(),
  useFetchMoviesQuery: jest.fn(),
}));

// MOCK DA YOUTUBE
jest.mock('../src/reduxStore/youtubeDataSlice.js', () => ({
  useFetchTrailerQuery: jest.fn(),
}));

// MOCK DETALHES FILME
const mockMovieDetails = {
  Title: 'John Wick',
  Plot: "With the untimely death of his beloved wife still bitter in his mouth, John Wick, the expert former assassin, receives one final gift from her--a precious keepsake to help John find a new meaning in life now that she is gone. But when the arrogant Russian mob prince, Iosef Tarasov, and his men pay Wick a rather unwelcome visit to rob him of his prized 1969 Mustang and his wife's present, the legendary hitman will be forced to unearth his meticulously concealed identity. Blind with revenge, John will immediately unleash a carefully orchestrated maelstrom of destruction against the sophisticated kingpin, Viggo Tarasov, and his family, who are fully aware of his lethal capacity. Now, only blood can quench the boogeyman's thirst for retribution.",
  Year: '2014',
  Genre: 'Action, Crime, Thriller',
  Director: 'Chad Stahelski',
  Actors: 'Keanu Reeves, Michael Nyqvist, Alfie Allen',
  imdbRating: '7.4',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg',
};

//MOCK DO USENAVIGATE PARA IR BUSCAR O TITLE
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

//COMPORTAMENTO MOCK
const mockNavigate = jest.fn();
require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);

// NO COMPONENTE PRINCIPAL
describe('SearchPage', () => {
  // LIMPA OS MOCKS ANTES DE COMEÇAR
  beforeEach(() => {
    jest.clearAllMocks();
  });

  //------------------------------------------------------------------------------------------------------

  test('Render de App e Abrir SearchPage', () => {
    //RENDER APP
    render(<App />);

    //PROCURAR O LINK
    expect(screen.getByText('Pesquisar')).toBeInTheDocument();

    //CLICAR NO LINK
    fireEvent.click(screen.getByText('Pesquisar'));

    //VER SE TEM O INPUT
    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument();
  });

  //------------------------------------------------------------------------------------------------------

  //SIMULA NAVEGAÇÃO
  test('Navigate é chamado com filtros corretos', () => {
    const { useFetchMoviesQuery } = require('../src/reduxStore/omdbSlice.js');

    //CHAMA AQUERY MOCKED
    useFetchMoviesQuery.mockReturnValue({
      data: { Search: [mockMovieDetails] },
      error: null,
      isLoading: false,
    });

    //SIMULA NAVEGAÇÃO
    const mockNavigate = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);

    //RENDER
    render(
      <Router>
        <SearchPage />
      </Router>,
    );

    //SIMULA PESQUISA
    fireEvent.change(screen.getByPlaceholderText('Nome'), {
      target: { value: 'John Wick' },
    });

    //CLICA PESQUISAR
    fireEvent.click(screen.getByText('Procurar'));

    //Vê SE O NAVIGATE FOI CHAMADO COM OS VALOR CORRETO
    expect(mockNavigate).toHaveBeenCalledWith('/results', {
      state: { filters: { title: 'John Wick', year: '', plot: 'short' } },
    });
  });

  //------------------------------------------------------------------------------------------------------
  test('Renderizar o SearchPage - Ver se tem os inputs esperados', () => {
    //RENDER APP
    render(
      <Router>
        <SearchPage />
      </Router>,
    );

    // INPUTS
    const nome = screen.getByPlaceholderText('Nome');
    const ano = screen.getByPlaceholderText('Ano');
    const plot = screen.getByLabelText('Plot');

    // VER SE EXISTEM
    expect(nome).toBeInTheDocument();
    expect(ano).toBeInTheDocument();
    expect(plot).toBeInTheDocument();
  });

  //------------------------------------------------------------------------------------------------------
  test('Render SearchPage - Ver se o Botão de Procurar está ligado', () => {
    //RENDER
    render(
      <Router>
        <SearchPage />
      </Router>,
    );

    const procurarButton = screen.getByText('Procurar');
    expect(procurarButton).toBeEnabled();
  });
});

//------------------------------------------------------------------------------------------------------
