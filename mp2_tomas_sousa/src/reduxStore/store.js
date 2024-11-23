import { configureStore } from '@reduxjs/toolkit';
import { omdbSlice } from './omdbSlice.js';
import { youtubeSlice } from './youtubeDataSlice.js';

const store = configureStore({
  reducer: {
    // Reducer dos filmes e detalhes
    [omdbSlice.reducerPath]: omdbSlice.reducer,

    // Reducer do YouTube
    [youtubeSlice.reducerPath]: youtubeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      omdbSlice.middleware,
      youtubeSlice.middleware,
    ),
});

export default store;
