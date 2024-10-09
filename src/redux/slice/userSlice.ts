/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../../utils/utils";

export const userSlice = createSlice({
  name: "user",
  initialState: loadFromLocalStorage() || null,
  reducers: {
    login: (_, action) => {
      return { ...action.payload };
    },
    logout: () => {
      return null;
    },
  },
});

export const { login, logout } = userSlice.actions;

/**
 * Callback method to get user data by passing store
 * @param state // all states
 * @returns user details
 */
export const getUserDetails = (state: any) => state?.user;
