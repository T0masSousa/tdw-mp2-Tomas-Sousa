import { configureStore } from '@reduxjs/toolkit';
import { omdbSlice } from './omdbSlice.js';
import { youtubeSlice } from './youtubeDataSlice.js';

//CONFIG DA STORE DO REDUX
const store = configureStore({
  reducer: {
    //REDUCER FILMES COM PESQUISA SEARCH PARA OS GERAIS E TITLE PARA OS DETALHES
    [omdbSlice.reducerPath]: omdbSlice.reducer,

    //REDUCER YOUTUBE
    [youtubeSlice.reducerPath]: youtubeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    //MIDDLEWARE
    getDefaultMiddleware().concat(
      omdbSlice.middleware,
      youtubeSlice.middleware,
    ),
});

export default store;
