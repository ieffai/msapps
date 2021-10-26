import {createSlice} from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: 'photos',
  initialState: {
    photoData: [],
  },
  reducers: {
    setPhotos(state, action) {
      state.photoData = action.payload;
    },
  },
});

export default photoSlice.reducer;
export const {setPhotos} = photoSlice.actions;
