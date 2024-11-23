// ESTE TESTE SIMULA O USO DA APP AO PEDIR UM FILME E VER OS DETALHES. TESTA SE TUDO RENDERIZA COM OS RESULTADOS ESPERADOS
// SEGUNDO TESTE É VER SE APP RENDERIZA COM INPUTS
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App from '../src/App';
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
  Plot: 'John Wick is a former hitman grieving the loss of his true love. When his home is broken into, robbed, and his dog killed, he is forced to return to action to exact revenge.',
  Year: '2014',
  Genre: 'Action, Crime, Thriller',
  Director: 'Chad Stahelski',
  Actors: 'Keanu Reeves, Michael Nyqvist, Alfie Allen',
  imdbRating: '7.4',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg',
};

// MOCK Trailer
const mockTrailerData = {
  items: [
    {
      id: { videoId: 'C0BMx-qxsP4' },
    },
  ],
};

// NO COMPONENTE PRINCIPAL
describe('App Component', () => {
  // LIMPA OS MOCKS ANTES DE COMEÇAR
  beforeEach(() => {
    jest.clearAllMocks();
  });

  //------------------------------------------------------------------------------------------------------
  // RENDER DE LISTA COM FILTROS
  test('Render de Resultados com Filtros', () => {
    //QUERY
    const { useFetchMoviesQuery } = require('../src/reduxStore/omdbSlice.js');

    //MOCK RESPOSTA
    useFetchMoviesQuery.mockReturnValue({
      data: { Search: [mockMovieDetails] },
      error: null,
      isLoading: false,
    });

    // RENDER DE APP
    render(<App />);

    //SIMULAR A MUDANÇADO INPUT PARA JOHN WICK
    fireEvent.change(screen.getByPlaceholderText('Nome'), {
      target: { value: 'John Wick' },
    });

    // SIMULA CLIQUE DE PROCURA
    fireEvent.click(screen.getByText('Procurar'));

    // VERIFICA SE O TÍTULO LÁ ESTÁ
    expect(screen.getByText('John Wick')).toBeInTheDocument();
  });

  //------------------------------------------------------------------------------------------------------
  // RENDER DOS DETALHES DO FILME
  test('Render de detalhes', () => {
    // QUERY OMDB
    const {
      useFetchMovieDetailsQuery,
    } = require('../src/reduxStore/omdbSlice.js');

    // QUERY YT
    const {
      useFetchTrailerQuery,
    } = require('../src/reduxStore/youtubeDataSlice.js');

    // MOCK RESPOSTA QUERY OMDB
    useFetchMovieDetailsQuery.mockReturnValue({
      data: mockMovieDetails,
      error: null,
      isLoading: false,
    });

    // MOCK DA RESPOSTA QUERY YT
    useFetchTrailerQuery.mockReturnValue({
      data: mockTrailerData,
      error: null,
      isLoading: false,
    });

    // RENDER DO APP
    render(<App />);

    // SIMULAR A MUDANÇA DO INPUT
    fireEvent.change(screen.getByPlaceholderText('Nome'), {
      target: { value: 'John Wick' },
    });

    // SIMULAR CLIQUE EM PROCURAR
    fireEvent.click(screen.getByText('Procurar'));

    // SIMULAR CLIQUE EM VER DETALHES
    fireEvent.click(screen.getByText('Ver Detalhes'));

    // PROCURA O NOME
    expect(screen.getByText('John Wick')).toBeInTheDocument();

    // PLOT
    expect(
      screen.getByText(
        'John Wick is a former hitman grieving the loss of his true love. When his home is broken into, robbed, and his dog killed, he is forced to return to action to exact revenge.',
      ),
    ).toBeInTheDocument();

    // DIRETOR
    expect(screen.getByText('Diretor: Chad Stahelski')).toBeInTheDocument();
  });

  //------------------------------------------------------------------------------------------------------
  test('Renderizar o App e ver se tem os inputs esperados', () => {
    //RENDER APP
    render(<App />);

    // INPUTS
    const nome = screen.getByPlaceholderText('Nome');
    const ano = screen.getByPlaceholderText('Ano');
    const tipo = screen.getByLabelText('Tipo');
    const plot = screen.getByLabelText('Plot');

    // VER SE EXISTEM
    expect(nome).toBeInTheDocument();
    expect(ano).toBeInTheDocument();
    expect(tipo).toBeInTheDocument();
    expect(plot).toBeInTheDocument();
  });
});
