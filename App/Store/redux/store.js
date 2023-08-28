import {configureStore} from '@reduxjs/toolkit';
import favReducer from './fav';

export const store = configureStore({
  reducer: {
    favFood: favReducer,
  },
});
