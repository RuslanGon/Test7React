import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  timer: 0
};


const timerSlice = createSlice({
  name: "timer",

  initialState: INITIAL_STATE,

  reducers: {
    incrementTimer(state) {
      state.timer = state.timer + 1;
    },
  },
});
  
  export const { incrementTimer } = timerSlice.actions;
  
  export const timerReducer = timerSlice.reducer;