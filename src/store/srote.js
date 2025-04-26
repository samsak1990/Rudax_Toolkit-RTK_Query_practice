import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteReduser } from "./favorites/favorites.slice";
import { api } from "./favorites/api/api";

const redusers = combineReducers({
  favorites: favoriteReduser,
  [api.reducerPath]: api.reducer,
}); //сюда помещать все редьюсеры

export const store = configureStore({
  reducer: redusers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
