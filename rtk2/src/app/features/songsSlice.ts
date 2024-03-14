import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { reset } from "../actions";

const initialState: string[] = [];

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeSong: (state, action: PayloadAction<string>) => {
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

export const { addSong, removeSong } = songsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSongs = (state: RootState) => state.songs;

export const songsReducer = songsSlice.reducer;
