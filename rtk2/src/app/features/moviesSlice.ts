import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { reset } from "../actions";

const initialState: string[] = [];

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeMovie: (state, action: PayloadAction<string>) => {
      const index = state.indexOf(action.payload);

      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies;

export const moviesReducer = moviesSlice.reducer;
