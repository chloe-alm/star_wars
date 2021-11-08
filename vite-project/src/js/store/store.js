import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import settingsReducer, { settingsSlice } from "./settings";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    settings: settingsReducer,
  },
});
