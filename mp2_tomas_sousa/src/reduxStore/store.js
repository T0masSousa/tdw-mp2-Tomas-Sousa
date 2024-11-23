import { configureStore } from '@reduxjs/toolkit';
import { omdbSlice } from './omdbSlice.js';

const store = configureStore({
  reducer: {
    //Reducer dos filmes
    [omdbSlice.reducerPath]: omdbSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(omdbSlice.middleware),
});

export default store;
