import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {urlMap} from '../global';

const initialState = {
  randomMeal: [],
  status: 'idle',
  error: 'null',
};

export const fetchRandomMeal = createAsyncThunk(
  'randomMeal/fetchRandomMeal',
  async () => {
    try {
      const response = await axios.get(urlMap.random);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },
);

const randomMealSlice = createSlice({
  name: 'randomMeal',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRandomMeal.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchRandomMeal.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.randomMeal = [...action.payload.meals];
      })
      .addCase(fetchRandomMeal.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getRandomMeal = state => state.randomMeal.randomMeal;
export const getStatus = state => state.randomMeal.status;
export const getError = state => state.randomMeal.error;

export default randomMealSlice.reducer;
