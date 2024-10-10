// import { saveToLocalStorage } from "../../utils/utils";
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slice/userSlice";
import { loadFromLocalStorage, saveToLocalStorage } from "../../utils/utils";
import { apiSlice } from "../slice/apiSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  preloadedState: { user: loadFromLocalStorage() },
  middleware: (prevMiddleware) => prevMiddleware().concat(apiSlice.middleware),
});

// Subscribe to store updates and save the state to localStorage
store.subscribe(() => {
  saveToLocalStorage(store.getState().user);
});
