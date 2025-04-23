import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteReduser } from "./favorites/favorites.slice";

const redusers = combineReducers({
  favorites: favoriteReduser,
}); //сюда помезать все редьюсеры

export const store = configureStore({
  reducer: redusers,
});
