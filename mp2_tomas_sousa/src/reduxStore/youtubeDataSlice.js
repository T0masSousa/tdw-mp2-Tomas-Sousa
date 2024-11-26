import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//CHAVE YOUTUBE DATA
const youtubeApiKey = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const youtubeSlice = createApi({
  //NOME REDUCER
  reducerPath: 'youtubeApi',

  //QUERY A FAZER
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/youtube/v3/',
  }),
  endpoints: (builder) => ({
    //TRAILER
    fetchTrailer: builder.query({
      query: (title) =>
        //TRAILER DO FILME OU SÉRIE X
        `search?part=snippet&q=${title} trailer&key=${youtubeApiKey}`,
    }),
  }),
});

//HOOK QUE DETALHES USA
export const { useFetchTrailerQuery } = youtubeSlice;
