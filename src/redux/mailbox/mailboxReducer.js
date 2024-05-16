import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  users: [],
  filter: "",
};

const mailboxSlice = createSlice({

  name: "mailbox",

  initialState: INITIAL_STATE,

  reducers: {
    addUser(state, action) {
      state.users.push(action.payload)
    },
    deleteUser(state, action) {
        state.users = state.users.filter(user => user.id !== action.payload)
    },
    filterUser(state, action) {
        state.filter = action.payload
    },
  },
});

export const { addUser, deleteUser, filterUser } = mailboxSlice.actions;

export const mailboxReducer = mailboxSlice.reducer;

