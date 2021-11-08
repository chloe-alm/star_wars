import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appName: "Default App Name",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.appName = action.payload;
    },
    clearName: () => {
      initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setName, clearName } = settingsSlice.actions;

export default settingsSlice.reducer;
