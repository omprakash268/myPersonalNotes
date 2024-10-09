/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../../utils/utils";


export const userSlice = createSlice({
  name: "user",
  initialState: { user: loadFromLocalStorage() || undefined },
  reducers: {
    login: (state, action) => {
      state.user = { ...action.payload };
    },
    logout: (state) => {
      state.user = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;

/**
 * Callback method to get user data by passing store
 * @param state // all states
 * @returns user details
 */
export const getUserDetails = (state: any) => state?.user?.user;
