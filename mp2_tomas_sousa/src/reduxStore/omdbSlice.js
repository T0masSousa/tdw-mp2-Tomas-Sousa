import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//CHAVE API
const apiKey = process.env.REACT_APP_OMDB_API_KEY;

//SLICE
export const omdbSlice = createApi({
  //NOME REDUCER
  reducerPath: 'omdbApi',

  //PEDIDO A FAZER
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.omdbapi.com/',
  }),
  endpoints: (builder) => ({
    //PARA OS CARDS
    fetchMovies: builder.query({
      //REQUER TITULO E PODE LEVAR COMO OPÇÃO O ANO, TIPO, TIPO DE DADOS E NÚMERO DE PÁGINAS QUE RETORNA
      query: ({ title, year, type, plot }) =>
        `?s=${title}&y=${year}&plot=${plot}&r=json&apikey=${apiKey}`,
    }),

    //PARA OS DETALHES DE UM FILME
    fetchMovieDetails: builder.query({
      //REQUER TITULO E PODE LEVAR COMO OPÇÃO O ANO, TIPO, TIPO DE DADOS E NÚMERO DE PÁGINAS QUE RETORNA
      query: (title) => `?t=${title}&plot=full&r=json&apikey=${apiKey}`,
    }),
  }),
});

//EXPORTAR QUERIES PARA OS OUTROS FICHEIROS CHAMAREM
export const { useFetchMoviesQuery, useFetchMovieDetailsQuery } = omdbSlice;
