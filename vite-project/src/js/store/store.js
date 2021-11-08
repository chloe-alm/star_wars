import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export default store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
