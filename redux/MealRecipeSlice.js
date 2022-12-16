import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {urlMap} from '../global';

const initialState = {
  mealRecipe: [],
  status: 'idle',
  error: 'null',
};

export const fetchMealRecipe = createAsyncThunk(
  'mealRecipe/fetchMealRecipe',
  async id => {
    try {
      const response = await axios.get(`${urlMap.byMealId}${id}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },
);

const mealsInCategorySlice = createSlice({
  name: 'mealRecipe',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMealRecipe.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMealRecipe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mealRecipe = [...action.payload.meals];
      })
      .addCase(fetchMealRecipe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getMealRecipe = state => state.mealRecipe.mealRecipe;
export const getStatus = state => state.mealRecipe.status;
export const getError = state => state.mealRecipe.error;

export default mealsInCategorySlice.reducer;
