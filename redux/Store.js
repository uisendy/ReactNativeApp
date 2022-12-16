import {configureStore} from '@reduxjs/toolkit';
import authenticateReducer from './AuthenticationSlice';
import mealCategoryReducer from './MealCategorySlice';
import randomMealReducer from './RandomMealSlice';
import mealsInCategoryReducer from './MealsInCategorySlice';
import mealRecipeReducer from './MealRecipeSlice';

export const store = configureStore({
  reducer: {
    authenticate: authenticateReducer,
    mealCategory: mealCategoryReducer,
    randomMeal: randomMealReducer,
    mealsInCategory: mealsInCategoryReducer,
    mealRecipe: mealRecipeReducer,
  },
});
