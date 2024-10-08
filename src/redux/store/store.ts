import { createStore } from "redux";
import { userReducer } from "../reducers/userReducer";
import { getUserStateFromLocalStorage } from "../../utils/utils";

const initialState = getUserStateFromLocalStorage();

export const store = createStore(userReducer, initialState);
