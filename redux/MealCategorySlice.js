import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {urlMap} from '../global';

const initialState = {
  mealCategory: [],
  status: 'idle',
  error: 'null',
};

export const fetchMealCategory = createAsyncThunk(
  'mealCategory/fetchMealCategory',
  async () => {
    try {
      const response = await axios.get(urlMap.categories);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },
);

const mealCategorySlice = createSlice({
  name: 'mealCategory',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMealCategory.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMealCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mealCategory = [...action.payload.categories];
      })
      .addCase(fetchMealCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getMealCategory = state => state.mealCategory.mealCategory;
export const getStatus = state => state.mealCategory.status;
export const getError = state => state.mealCategory.error;

export default mealCategorySlice.reducer;
