import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: '',
  serviceable: false,  // Whether the location is serviceable
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setServiceable: (state, action) => {
      state.serviceable = action.payload;
    },
  }
});

export const { setCity, setServiceable } = locationSlice.actions;
export default locationSlice.reducer;