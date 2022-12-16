import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {urlMap} from '../global';

const initialState = {
  mealsInCategory: [],
  status: 'idle',
  error: 'null',
};

export const fetchMeals = createAsyncThunk(
  'mealsInCategory/fetchMeals',
  async category => {
    try {
      const response = await axios.get(`${urlMap.byCategory}${category}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },
);

const mealsInCategorySlice = createSlice({
  name: 'mealsInCategory',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMeals.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mealsInCategory = [...action.payload.meals];
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getMealsInCategory = state =>
  state.mealsInCategory.mealsInCategory;
export const getStatus = state => state.mealsInCategory.status;
export const getError = state => state.mealsInCategory.error;

export default mealsInCategorySlice.reducer;
