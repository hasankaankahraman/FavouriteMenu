import {createSlice} from '@reduxjs/toolkit';

const favslice = createSlice({
  name: 'fav',
  initialState: {
    ids: [],
  },
  reducers: {
    addFav: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFav: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export default favslice.reducer;
export const {addFav, removeFav} = favslice.actions;
