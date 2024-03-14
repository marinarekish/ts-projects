import { configureStore } from "@reduxjs/toolkit";
import { songsReducer } from "./features/songsSlice";
import { moviesReducer } from "./features/moviesSlice";

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {songs: SongsState, movies: MoviesState}
export type AppDispatch = typeof store.dispatch;
