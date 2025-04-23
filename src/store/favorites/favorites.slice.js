import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesslice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const recipe = action.payload;
      const isExist = state.some((r) => r.id === recipe.id);
      if (isExist) {
        return state.filter((r) => r.id !== recipe.id);
      } else {
        return [...state, recipe];
      }
    },
  },
});

export const { actions, reducer } = favoritesslice;
