import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Local Env Key
const apiKey = process.env.REACT_APP_OMDB_API_KEY;

export const omdbSlice = createApi({
  // Reducer name
  reducerPath: 'omdbApi',

  // Request
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.omdbapi.com/',
  }),
  endpoints: (builder) => ({
    // PARA OS CARDS
    fetchMovies: builder.query({
      // title by name (Required), year (optional), result type (movie, series, episode - OPTIONAL), data type returned JSON or XML, number of pages to return
      query: ({ title, year, type, plot }) =>
        `?s=${title}&y=${year}&type=${type}&plot=${plot}&r=json&apikey=${apiKey}`,
    }),

    // PARA OS DETALHES
    fetchMovieDetails: builder.query({
      // title by name (Required), year (optional), result type (movie, series, episode - OPTIONAL), data type returned JSON or XML, number of pages to return
      query: (title) => `?t=${title}&plot=full&r=json&apikey=${apiKey}`,
    }),
  }),
});

// Query que os outros ficheiro vão usar
export const { useFetchMoviesQuery, useFetchMovieDetailsQuery } = omdbSlice;
