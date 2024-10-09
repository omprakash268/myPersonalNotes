// import { saveToLocalStorage } from "../../utils/utils";
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slice/userSlice";
import { loadFromLocalStorage, saveToLocalStorage } from "../../utils/utils";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  preloadedState: { user: loadFromLocalStorage() },
});

// Subscribe to store updates and save the state to localStorage
store.subscribe(() => {
  saveToLocalStorage(store.getState().user);
});
